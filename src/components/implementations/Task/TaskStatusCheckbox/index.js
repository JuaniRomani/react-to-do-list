import React from "react";
import Checkbox from "@/components/base/Checkbox";

const TaskStatusCheckbox = ({ taskId, checked, handleStatusChange }) => {
  const processValue = (event) => {
    const selectControlValue = event.target.checked;
    handleStatusChange(taskId, selectControlValue);
  };

  return (
    <>
      <Checkbox id={taskId} checked={checked} processValue={processValue}>
        Done
      </Checkbox>
    </>
  );
};

export default TaskStatusCheckbox;
