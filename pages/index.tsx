import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" grid md:grid-cols-2 sm:grid-cols-1 h-full w-full">
      <div className=" bg-secondary-200 w-full h-full flex justify-center items-center ">
        <img className=" w-[600px]" src="/assets/images/singer.jpg"></img>
      </div>
      <div className=" bg-primary-200 w-full h-full flex justify-center items-center">
        <img className=" w-[350px] " src="/assets/images/mountain.jpg"></img>
      </div>
    </div>
  );
}
