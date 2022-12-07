import { type NextPage } from "next";

const Sidenav: NextPage = () => {
  return (
    <ul className="mb-20 flex flex-col gap-5 bg-green-200 text-right text-xl font-semibold uppercase">
      <li className="group items-center justify-center align-middle active:text-6xl">
        <span className="opacity-0 group-active:opacity-100">•</span>
        <button>About</button>
      </li>
      <li className="group items-center justify-center align-middle active:text-6xl">
        <span className="opacity-0 group-active:opacity-100">•</span>
        <button>Affiliation</button>
      </li>
      <li className="group items-center justify-center align-middle active:text-6xl">
        <span className="opacity-0 group-active:opacity-100">•</span>
        <button>Stats</button>
      </li>
      <li className="group items-center justify-center align-middle active:text-6xl">
        <span className="opacity-0 group-active:opacity-100">•</span>
        <button>Relationships</button>
      </li>
      <li className="group items-center justify-center align-middle active:text-6xl">
        <span className="opacity-0 group-active:opacity-100">•</span>
        <button>Skills</button>
      </li>
      <li className="group items-center justify-center align-middle active:text-6xl">
        <span className="opacity-0 group-active:opacity-100">•</span>
        <button>Troops</button>
      </li>
      <li className="group items-center justify-center align-middle active:text-6xl">
        <span className="opacity-0 group-active:opacity-100">•</span>
        <button>Weapons & EQs</button>
      </li>
    </ul>
  );
};

export default Sidenav;
