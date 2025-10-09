import React from "react";

function TailwindButton({ children, className }) {
  return (
    <button
      className={`bg-green text-background hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-full px-6 py-3 text-lg font-light uppercase ${className}`}
    >
      {children}
    </button>
  );
}

export default TailwindButton;
