import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import UserContext from "@/utils/Context/UserContext/UserContext";
import ToDoListTemplate from "@/components/templates/ToDoListTemplate";

const UserToDoPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState({ userId: null });

  useEffect(() => {
    if (router.query.slug && router.query.slug[0] !== query.userId) {
      setQuery({
        userId: router.query.slug[0],
      });
    }
  }, [router.query.slug]);

  if (router.isIntersecting) return <div>Loading...</div>;

  return (
    <UserContext.Provider value={query}>
      <Head>
        <title>Users To-Do Lists</title>
        <meta name="description" content="Users To-Do Lists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <ToDoListTemplate />
      </PageWrapper>
    </UserContext.Provider>
  );
};

export default UserToDoPage;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
