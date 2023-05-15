import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "My Music", href: "/music" },
  { text: "My Photography", href: "/photography" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <nav className="flex flex-col float-right px-6">
      <div className={"flex space-x-1 my-4"}>
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
