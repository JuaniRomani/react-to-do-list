import React, { useState } from "react";
import Input from "../Input";

const Checkbox = ({ id, checked, css, processValue }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.value);
  };

  return (
    <Input
      css={css}
      name={id}
      type="checkbox"
      defaultChecked={checked}
      value={isChecked}
      onChange={(e) => handleChange(e)}
      processValue={(e) => processValue(e)}
    />
  );
};

export default Checkbox;
