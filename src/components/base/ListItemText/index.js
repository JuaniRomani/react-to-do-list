import React from "react";
import styled from "styled-components";
import { baseTextStyles } from "@/styles/CommonStyled";

const ListItemText = ({ text }) => {
  return (
    <Item>
      <Text>
        {text}
      </Text>
    </Item>
  );
};

export default ListItemText;

const Item = styled.div`
  width: 100%;
`;

const Text = styled.span`
  ${baseTextStyles}
`;
