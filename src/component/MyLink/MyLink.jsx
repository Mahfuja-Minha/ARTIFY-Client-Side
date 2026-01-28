import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "font-bold text-[#7C3AED] border-b-2 border-[#7C3AED]"
          : `${className} font-semibold text-base-content hover:text-[#7C3AED]`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
