import Header from "@components/layout/hedear";
import Footer from "@components/layout/footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-secondary-200"></div>
        <div className="bg-primary-200"></div>
        <div className="absolute inset-0 flex justify-center items-center z-10 mx-20 my-24 bg-primary-200 drop-shadow-4xl">
          <div className="flex flex-col w-full h-full ">
            <Header></Header>
            <main className="flex flex-col w-full h-full overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
