import React from "react";
import Button from "@/components/base/Button";

const CreateTaskButton = ({ processClick, className, css }) => {
  return (
    <>
      <Button action={processClick} css={css} className={className}>
        Create Task
      </Button>
    </>
  );
};

export default CreateTaskButton;
