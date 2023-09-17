/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { api } from "../../../utils/Request.utils";
import request from "../../../../request.json";
import { ToastUtils } from "../../../utils/Toast.utils";

export const CalculatorContext = createContext({
  hours: {
    released: 0,
    done: 0,
  },
  activities: [],
  pagination: {
    firstItem: 0,
    lastItem: 0,
    totalItems: 0,
  },
  allTableChecked: false,
  categories: [],
  nextPage: () => null,
  previousPage: () => null,
  deleteActivities: () => null,
  onCheckRow: (index = 0, payload = false) => null,
  onSelectAllTable: (payload = false) => null,
  setStudentId: (id = "") => null,
  setCategories: (cateogires = []) => null,
  fetchActivities: () => null,
  postActicity: (payload) => null,
  submitActivities: () => null,
});

export const CalculatorProvider = (props) => {
  const [pagination, setPagination] = useState({
    firstItem: 0,
    lastItem: 0,
    totalItems: 0,
    currentPage: 1,
    totalPages: 1,
  });
  const [hours, setHours] = useState({ released: 0, done: 0 });
  const [allTableChecked, setAllTableChecked] = useState(false);
  const [activities, setActivities] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [categories, setCategories] = useState(request["get:/activity/type/"]);

  function onCheckRow(index = 0, payload = false) {
    setActivities((old) =>
      old.map((e, i) => {
        if (i === index) {
          e.isChecked = payload;
        }
        return e;
      })
    );
    if (!payload) setAllTableChecked(false);
  }
  function onSelectAllTable(payload = false) {
    setAllTableChecked(payload);
    setActivities((old) =>
      old.map((e) => {
        return { ...e, isChecked: payload };
      })
    );
  }

  async function deleteActivities(activities = []) {
    try {
      for (const activity of activities) {
        await api.delete(`/activity/${studentId}/${activity._id}`);
      }
    } catch {
      ToastUtils.error(
        "Não foi possível deletar todas as atividades selecionadas"
      );
    }
  }

  async function postActicity(payload) {
    const body = {
      accomplishedWorkload: Number(payload.chDone),
      activity: payload.activity,
      area: payload.acting,
      category: payload.category,
      endDate: payload.date,
      institution: payload.institution,
      periods: 1,
      startDate: payload.date,
      student: studentId,
    };
    const result = (await api.post("/activity/", body)).data;
    const formData = new FormData();
    formData.append("certificate", payload.file);
    await api.post(
      `/activity/certificate/${studentId}/${result._id}`,
      formData
    );
  }

  async function fetchActivities() {
    const result = (
      await api.get(
        `/activity/${studentId}?currentPage=${pagination.currentPage}&pageSize=10`
      )
    ).data;
    // const result = request["get:/activity/{student_id}"];
    setHours({
      released: result.totalPostedWorkload,
      done: result.totalAccomplishedWorkload,
    });
    setPagination((old) => ({
      currentPage: old.currentPage,
      totalItems: result.totalActivities,
      totalPages: Math.ceil(result.totalActivities / 10),
      firstItem: result.totalActivities ? 10 * (old.currentPage - 1) + 1 : 0,
      lastItem:
        old.currentPage * 10 > result.totalActivities
          ? result.totalActivities
          : 10 * old.currentPage + 1,
    }));
    setActivities(
      result.activities.map((activity) => ({ ...activity, isChecked: false }))
    );
  }

  async function submitActivities() {
    await api.post(`/submit/${studentId}`);
  }
  function previousPage() {
    if (pagination.currentPage - 1 < 1) {
      return;
    }
    setPagination((old) => ({
      ...old,
      currentPage: old.currentPage - 1,
    }));
    fetchActivities();
  }

  function nextPage() {
    if (pagination.currentPage + 1 > pagination.totalPages) {
      return;
    }
    setPagination((old) => ({
      ...old,
      currentPage: old.currentPage + 1,
    }));
    fetchActivities();
  }

  return (
    <CalculatorContext.Provider
      value={{
        pagination,
        hours,
        activities,
        nextPage,
        previousPage,
        deleteActivities,
        allTableChecked,
        onCheckRow,
        onSelectAllTable,
        setStudentId,
        fetchActivities,
        setCategories,
        categories,
        postActicity,
        submitActivities,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  const result = useContext(CalculatorContext);
  return result;
};
