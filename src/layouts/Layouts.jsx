import React from "react";
import TopNav from "./TopNav/TopNav";

function Layouts({ children }) {
  return (
    <div className="flex flex-col min-h-[100vh] w-full bg-white font-runde lg:justify-center lg:items-center">
      <main className="flex flex-col w-full flex-grow lg:max-w-[1440px] ">
        <div className="border-2 w-full">
          <TopNav />
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layouts;
