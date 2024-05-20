import React, { useState } from 'react';
import styled from 'styled-components';

const Select = ({ values, processValue }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const mapSelectOptions = () => {
    return values.map((element, inx) => {
      return (
        <option key={inx} value={element.value}>
          {element.label}
        </option>
      )
    });
  };

  return ( 
    <SelectWrapper value={selectedValue} onChange={(e) => {handleSelectChange(e); processValue(e)}}>
      {mapSelectOptions()}
    </SelectWrapper>
   );
}
 
export default Select;

const SelectWrapper = styled.select`
  padding: .75em;
`;