import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solo Leveling</title>
        <meta name="description" content="Solo Leveling" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex h-screen flex-col text-white opacity-100">
        <Navbar />
        <main className="flex flex-grow items-center justify-between bg-orange-200 p-10">
          <div className="ml-28 max-w-lg bg-blue-200">
            <section>
              <div className="mb-28">
                <h4 className="text-3xl uppercase">S Rank</h4>
                <h5 className="text-xl uppercase">Shadow Monarch A.K.A</h5>
                <h1 className="text-6xl font-bold uppercase">Sung Jin Woo</h1>
                <h2 className="text-4xl font-bold uppercase">(KOREAN)</h2>
              </div>
              <p>
                Sung Jin-Woo (KOREAN)
                <br />
                is the protagonist of Solo Leveling. He was previously known as
                the World&apos;s Weakest Hunter and delved down the path of
                becoming the World&apos;s Strongest Hunter after he was
                Reawakened and became a Player
                <br />
                Jin-Woo was reawakened as a Player after surviving the Cartenon
                Temple and completing the secret quest &quot;Courage of the
                Weak&quot;. The mysterious System has allowed Jin-Woo to
                limitless level up and increases his strength, unlike all
                hunters, who are unable to increase their strength unless
                reawakened.
              </p>
            </section>
          </div>
          <Sidenav />
        </main>
      </div>
    </>
  );
};

export default Home;
