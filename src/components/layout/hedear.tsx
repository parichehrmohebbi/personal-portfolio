import Navbar from "@components/nav/navBar";

export default function Hooter() {
  return (
    <header className=" bg-thritery flex h-24 w-full">
      <div className="grid grid-cols-2 w-full">
        <div className="m-7 ml-10 tracking-widest text-secondary-400">
          PARICHEHR MOHEBBI
        </div>
        <div>
          <Navbar></Navbar>
        </div>
      </div>
    </header>
  );
}
