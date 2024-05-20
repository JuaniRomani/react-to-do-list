import Head from "next/head";
import ky from "ky";
import { inter_lat_font } from "@/utils/Styles/Fonts";
import styles from "@/styles/Home.module.css";
import UserList from "@/components/implementations/Lists/UserList";

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>Users To-Do Lists</title>
        <meta name="description" content="Users To-Do Lists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter_lat_font.className}`}>
        <UserList users={users}></UserList>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const users = await ky
    .get("https://jsonplaceholder.typicode.com/users")
    .json();

  return {
    props: { users },
  };
}
