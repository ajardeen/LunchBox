import React from "react";
import TopNav from "./TopNav/TopNav";

function Layouts({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white font-runde">
      <main className="flex flex-col items-center flex-grow px-4 sm:px-6 md:px-12 lg:px-10">
        {/* Container with max width for large screens */}
        <div className="w-full max-w-[1440px]">
          <TopNav />
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layouts;
