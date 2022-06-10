import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center flex-col  h-screen justify-center bg-black">
      <h1 className=" text-white text-9xl">Not Found..</h1>
      <Link to="/assignments" className="text-2xl text-blue-200">
        Go back to assignments.
      </Link>
    </div>
  );
}
export default NotFound;
