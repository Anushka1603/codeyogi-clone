import React from "react";
import { Link } from "react-router-dom";

function AssignmentRow({ assignment }) {
  return (
    <div className="p-4 m-2 text-lg text-black bg-white">
      <div className="text-lg font-bold">{assignments.title}</div>
      <div className="text-gray-700">{assignment.due_date}</div>
      <div className="text-gray-700">{assignment.description}</div>
      <Link>Submit</Link>
    </div>
  );
}
export default AssignmentRow;
