import React from "react";
import styled from "styled-components";
import { baseBoxStyles } from "@/styles/CommonStyled";
import ListItemText from "@/components/base/ListItemText";
import ToDoListControls from "../ToDoListControls";

const ToDoList = ({ items, handleStatusChange, handleDelete }) => {
  const renderUserListItems = (items) => {
    return items.map((item) => {
      return (
        <ListItem key={item.id}>
          <ListItemText text={item.title} />
          <ToDoListControls
            data={item}
            handleStatusChange={handleStatusChange}
            handleDelete={handleDelete}
          />
        </ListItem>
      );
    });
  };

  return <ListItemsContainer>{renderUserListItems(items)}</ListItemsContainer>;
};

export default ToDoList;

const ListItem = styled.div`
  ${baseBoxStyles}
`;

const ListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;
