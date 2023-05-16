import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
    <div className="flex flex-col md:w-40 sm:w-full">
      <div
        className={` h-[3px] rounded-md ${
          active ? "bg-primary-400" : "bg-secondary-300"
        }`}
      ></div>
      <Link href={href}>
        <span
          className={`flex justify-center items-center ${
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
