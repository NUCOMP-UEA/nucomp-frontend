/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { rowsMock } from "../constants/Rows";

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
  nextPage: () => null,
  previousPage: () => null,
  deleteActivities: () => null,
  onCheckRow: (index = 0, payload = false) => null,
  onSelectAllTable: (payload = false) => null,
});

export const CalculatorProvider = (props) => {
  const [pagination, setPagination] = useState({
    firstItem: 0,
    lastItem: 0,
    totalItems: 0,
  });
  const [hours, setHours] = useState({ released: 0, done: 0 });
  const [allTableChecked, setAllTableChecked] = useState(false);
  const [activities, setActivities] = useState(rowsMock);

  function onCheckRow(index = 0, payload = false) {
    setActivities((old) =>
      old.map((e, i) => {
        if (i === index) {
          e.isChecked = payload;
        }
        return e;
      })
    );
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
