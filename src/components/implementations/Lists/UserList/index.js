import React from "react";
import styled from "styled-components";
import Card from "@/components/base/Card";

const UserList = ({ users }) => {
  const renderUserListItems = (userList) => {
    return userList.map((user) => {
      return (
        <Card
          key={user.id}
          text={user.username}
          link={`/users/${user.id}/`}
        ></Card>
      );
    });
  };

  return (
    <UserListWrapper>
      <Users>{renderUserListItems(users)}</Users>
    </UserListWrapper>
  );
};

export default UserList;

const UserListWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 4em;
`;

const Users = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
`;
