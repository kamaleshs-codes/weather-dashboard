import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full p-3 bg-secondary text-main rounded-2xl border shadow-subtle ${className}`}>
      {children}
    </div>
  );
};
