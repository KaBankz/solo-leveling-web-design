import { type NextPage } from "next";
import { useState } from "react";

const Sidenav: NextPage = () => {
  const catagories = [
    "About",
    "Affiliation",
    "Stats",
    "Relationships",
    "Skills",
    "Troops",
    "Weapons & EQs",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className="mb-20 flex flex-col gap-5 bg-green-200 text-right font-semibold">
      {catagories.map((category, index) => (
        <li
          className={`items-center justify-center align-middle transition-all ease-linear ${
            index === activeIndex ? "text-5xl font-bold" : "text-xl"
          }`}
          key={`cat-${index}`}
        >
          <span className={index === activeIndex ? "opacity-100" : "opacity-0"}>
            •
          </span>
          <button className="uppercase" onClick={() => setActiveIndex(index)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Sidenav;
