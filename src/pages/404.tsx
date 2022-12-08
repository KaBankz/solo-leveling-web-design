import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
        <meta name="description" content="Solo Leveling" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex h-screen flex-col text-white">
        <Navbar />
        <main className="flex flex-grow items-center justify-between p-10">
          <div className="ml-28 max-w-lg">
            <section>
              <div className="mb-28">
                <h4 className="text-3xl uppercase">404</h4>
                <h5 className="text-xl uppercase">Not Found</h5>
              </div>
              <p>The page you are looking for does not exist.</p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFound;
