import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solo Leveling</title>
        <meta name="description" content="Solo Leveling" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main></main>
    </>
  );
};

export default Home;
