import React from "react";
import TopNav from "./TopNav/TopNav";

function Layouts({ children }) {
  return (
    <div className="flex flex-col  w-full bg-white font-runde lg:justify-center lg:items-center">
      <main className="flex flex-col w-full flex-grow lg:max-w-[1440px] ">
        <div className=" w-full">
          <TopNav />
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layouts;
