import React from "react";
import styled from "styled-components";
import DeleteTaskButton from "../../Task/DeleteTaskButton";
import TaskStatusCheckbox from "../../Task/TaskStatusCheckbox";

const ToDoListControls = ({ data, handleStatusChange, handleDelete }) => {
  return (
    <ControlContainer>
      <TaskStatusCheckbox
        taskId={data.id}
        checked={data.completed}
        handleStatusChange={handleStatusChange}
      />
      <DeleteTaskButton taskId={data.id} handleDelete={handleDelete} />
    </ControlContainer>
  );
};

export default ToDoListControls;

const ControlContainer = styled.div`
  display: flex;
  gap: 15px;
`;
