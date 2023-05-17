import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" grid md:grid-cols-2 sm:grid-cols-1 h-full w-full">
      <div className=" bg-secondary-200 w-full h-full flex flex-col justify-center items-center ">
        <h1 className="invisible md:visible mb-1 font-mono text-gray-100 text-sm text-secondary-900">
          <span className="inline-flex h-20 pt-2 overflow-x-hidden md:animate-type whitespace-nowrap text-brand-accent will-change-transform ">
            Hi, I am parichehr a programmer who loves to sing!
          </span>
          <span className="box-border inline-block w-[3px] h-8 ml-2 mb-2 md:-mb-4 bg-secondary-900 animate-cursor will-change-transform"></span>
        </h1>

        <img
          className=" md:w-[600px] sm:w-[350px]"
          src="/assets/images/singer.jpg"
        ></img>
      </div>
      <div className=" bg-primary-200 w-full h-full flex flex-col justify-center items-center">
        <h1 className="invisible md:visible mb-1 font-mono text-gray-100 text-sm  text-secondary-900">
          <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent will-change-transform">
            here you can also feel the world trough my camera!
          </span>
          <span className="box-border inline-block w-[3px] h-8 ml-2 mb-2 bg-secondary-900 md:-mb-4  animate-cursor will-change-transform"></span>
        </h1>
        <img
          className=" md:w-[350px] sm:w-full"
          src="/assets/images/mountain.jpg"
        ></img>
      </div>
    </div>
  );
}
