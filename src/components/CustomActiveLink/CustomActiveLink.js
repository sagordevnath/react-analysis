import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "orange" : "black",
          fontSize: match ? "20px" : "17px",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}

export default CustomActiveLink;
