import Navbar from "@components/nav/navBar";

export default function Hooter() {
  return (
    <header className=" bg-thritery flex md:h-24 sm:h-60 w-full">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 w-full">
        <div className="m-7 ml-10 md:tracking-widest sm:tracking-wide text-secondary-400">
          <p className="font-bold">PARICHEHR JAMI</p>
          <p className="md:ml-14 text-l">MOHEBBI</p>
        </div>
        <div className="px-6">
          <Navbar></Navbar>
        </div>
      </div>
    </header>
  );
}
