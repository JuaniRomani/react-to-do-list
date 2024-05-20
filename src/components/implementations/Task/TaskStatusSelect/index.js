import React from "react";
import Select from "@/components/base/Select";

const TaskStatusSelect = ({ handleSelected }) => {
  const getSelectOptions = () => {
    return [
      {
        value: -1,
        label: "All",
      },
      {
        value: 0,
        label: "Not done",
      },
      {
        value: 1,
        label: "Done",
      },
    ];
  };

  const processValue = (event) => {
    const selectControlValue = event.target.value;
    handleSelected(parseInt(selectControlValue));
  };

  return (
    <>
      <Select values={getSelectOptions()} processValue={processValue} />
    </>
  );
};

export default TaskStatusSelect;
