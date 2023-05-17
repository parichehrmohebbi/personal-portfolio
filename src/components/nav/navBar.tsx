import { useRouter } from "next/router";
import React, { useState } from "react";
import NavItem from "./navItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "My Music", href: "/music" },
  { text: "My Photography", href: "/photos" },
];
const Navbar = () => {
  const router = useRouter();
  const asPath = router.asPath;
  const [activeIdx, setActiveIdx] = useState(
    asPath === "/" ? 0 : asPath === "/music" ? 1 : 2
  );

  return (
    <div className=" md:float-right sm:justify-center sm:mb-10 ">
      <div className={"grid gap-1 md:grid-cols-3 sm:grid-cols-1 my-4"}>
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
