import React from "react";
import styled, { css } from "styled-components";
import { baseBoxStyles } from "@/styles/CommonStyled";
import CreateTaskInput from "../CreateTaskInput";
import CreateTaskButton from "../CreateTaskButton";

const CreateTaskArea = ({ inputValue, handleInputChange, handleCreate }) => {
  return (
    <CreateTaskAreaWrapper>
      <CreateTaskInput
        name={"taskInput"}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
      <CreateTaskButton
        processClick={handleCreate}
        css={CreateTaskButtonStyle}
      />
    </CreateTaskAreaWrapper>
  );
};

export default CreateTaskArea;

const CreateTaskAreaWrapper = styled.div`
  ${baseBoxStyles}
  width: 100%;
  justify-content: space-between;
`;

const CreateTaskButtonStyle = css`
  background-color: #242;
`;
