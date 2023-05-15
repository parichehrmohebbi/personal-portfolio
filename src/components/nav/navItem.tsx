import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
    <div className="flex flex-col ">
      <div
        className={`flex h-[3px] rounded-md ${
          active ? "bg-primary-400" : "bg-secondary-300"
        }`}
      ></div>
      <Link className={` flex `} href={href}>
        <span
          className={`flex w-40 justify-center items-center ${
            active ? "text-primary-400" : "text-secondary-300"
          }`}
        >
          {text}
        </span>
      </Link>
    </div>
  );
};

export default NavItem;
