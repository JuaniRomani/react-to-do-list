import React from "react";
import { css } from "styled-components";
import Button from "@/components/base/Button";

const DeleteTaskButton = ({ taskId, handleDelete }) => {
  const processClick = () => {
    handleDelete(taskId);
  };

  return (
    <>
      <Button css={ButtonCss} action={processClick}>
        Delete
      </Button>
    </>
  );
};

export default DeleteTaskButton;

const ButtonCss = css`
  background-color: #922;
`;
