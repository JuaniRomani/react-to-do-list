import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import UserContext from "@/utils/Context/UserContext/UserContext";
import useGet from "@/hooks/useGet";
import usePost from "@/hooks/usePost";
import usePatch from "@/hooks/usePatch";
import useDelete from "@/hooks/useDelete";
import { baseTextStyles } from "@/styles/CommonStyled";
import Button from "@/components/base/Button";
import CreateTaskArea from "@/components/implementations/Task/CreateTaskArea";
import TaskStatusSelect from "@/components/implementations/Task/TaskStatusSelect";
import ToDoList from "@/components/implementations/Lists/ToDoList";

const ToDoListTemplate = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();

  const [toDoItems, setToDoItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const apiEndpoint = "https://jsonplaceholder.typicode.com/todos";
  const [query, setQuery] = useState();
  const [requestBody, setRequestBody] = useState();

  const [taskText, setTaskText] = useState("");
  const [changeStatusTaskId, setChangeStatusTaskId] = useState();
  const [deleteTaskId, setDeleteTaskId] = useState();
  const [selectedStatus, setSelectedStatus] = useState();

  useEffect(() => {
    userContext && setQuery(userContext);
  }, [userContext]);

  useEffect(() => {
    selectedStatus >= 0
      ? setFilteredItems(
          toDoItems.filter((item) => item.completed == selectedStatus)
        )
      : setFilteredItems(toDoItems);
  }, [toDoItems, selectedStatus]);

  const handleSelectedStatus = (selectedStatusOption) => {
    setSelectedStatus(selectedStatusOption);
  };

  const handleStatusChange = (taskId, value) => {
    setChangeStatusTaskId(taskId);
    setRequestBody({ completed: value });
  };

  const handleNewTaskInputChange = (value) => {
    setTaskText(value);
  };

  const handleCreate = async () => {
    const userId = query.userId;

    await post({ userId, title: taskText, completed: false });
    setTaskText("");
  };

  const handleDelete = (taskId) => {
    setDeleteTaskId(taskId);
  };

  const { data: getResponseData } = useGet(apiEndpoint, query, {}, [query]);

  const { post, data: postResponseData } = usePost(apiEndpoint);

  const { response: patchResponseData } = usePatch(
    changeStatusTaskId && `${apiEndpoint}/${changeStatusTaskId}`,
    requestBody,
    {},
    [changeStatusTaskId, requestBody]
  );

  const { data: deleteResponseData } = useDelete(
    deleteTaskId && `${apiEndpoint}/${deleteTaskId}`,
    {},
    [deleteTaskId]
  );

  useEffect(() => {
    if (getResponseData) {
      setToDoItems(getResponseData);
    }
  }, [getResponseData]);

  useEffect(() => {
    if (postResponseData) {
      const updatedPostResponseData = { ...postResponseData, id: uuidv4() };
      setToDoItems([updatedPostResponseData, ...toDoItems]);
    }
  }, [postResponseData]);

  useEffect(() => {
    if (patchResponseData) {
      const updatedItems = toDoItems.map((item) =>
        item.id === patchResponseData.id
          ? { ...item, ...patchResponseData }
          : item
      );

      setToDoItems(updatedItems);
    }
  }, [patchResponseData]);

  useEffect(() => {
    if (deleteResponseData) {
      const updatedItems = toDoItems.filter((item) => item.id !== deleteTaskId);

      setToDoItems(updatedItems);
    }
  }, [deleteResponseData]);

  return (
    <Wrapper>
      <PageTitle>To Do List</PageTitle>
      <ActionsWrapper>
        <Button action={() => router.push("/")}>Go Back</Button>
        <TaskStatusSelect handleSelected={handleSelectedStatus} />
      </ActionsWrapper>
      <NewTaskWrapper>
        <CreateTaskArea
          inputValue={taskText}
          handleInputChange={handleNewTaskInputChange}
          handleCreate={handleCreate}
        />
      </NewTaskWrapper>
      <ToDoList
        items={filteredItems}
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
      />
    </Wrapper>
  );
};

export default ToDoListTemplate;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 20px;
  padding: 20px;
`;

const PageTitle = styled.h1`
  ${baseTextStyles}
  font-size: 3em;
`;

const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NewTaskWrapper = styled.div`
  width: 100%;
`;
