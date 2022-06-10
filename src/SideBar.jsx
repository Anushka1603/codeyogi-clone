import React from "react";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="w-60 bg-gray-700 flex flex-col p-2 space-y-4 ">
      <Link to="/quiz" className="text-white">
        Quiz
      </Link>

      <Link to="/lectures" className="text-white">
        Lectures
      </Link>
      <Link to="/assignments" className="text-white">
        {" "}
        Assignments
      </Link>
      <Link to="/students" className="text-white">
        {" "}
        Students
      </Link>
    </div>
  );
}
export default SideBar;
