/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { rowsMock } from "../constants/Rows";
import { api } from "../../../utils/Request.utils";
import request from "../../../../request.json";

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
});

export const CalculatorProvider = (props) => {
  const [pagination, setPagination] = useState({
    firstItem: 0,
    lastItem: 0,
    totalItems: 0,
  });
  const [hours, setHours] = useState({ released: 0, done: 0 });
  const [allTableChecked, setAllTableChecked] = useState(false);
  const [activities, setActivities] = useState([]);
  const [studentId, setStudentId] = useState("64fa42357c1f510fd07fb49c");
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

  function nextPage() {
    console.log("nextPage");
  }

  function previousPage() {
    console.log("previousPage");
  }

  function deleteActivities(activities = []) {
    console.log("deleteActivities");
    console.log(activities);
  }

  async function fetchActivities() {
    // const result = (await api.get(`/activity/${studentId}`)).data;
    const result = request["get:/activity/{student_id}"];
    setHours({
      released: result.totalPostedWorkload,
      done: result.totalAccomplishedWorkload,
    });
    setActivities(
      result.activities.map((activity) => ({ ...activity, isChecked: false }))
    );
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
