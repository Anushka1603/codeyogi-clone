import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignmentRow from "./AssignmentRow";

function AssignmentList() {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/batches/1/assignments`, {
      withCredentials: true,
    });
    token.then((response) => {
      setAssignments(response.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold pl-4 pt-16 pb-4">
        Assignment List
      </h1>

      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex items-center text-5xl justify-center px-4 py-4 mt-2 bg-gray-50 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl space-y-8">Assignment List</div>
        </div>
        <div className="h-screen bg-gray-100">
          {assignments.map((a) => (
            <AssignmentRow assignment={a} key={a.id}></AssignmentRow>
          ))}
        </div>
      </div>
    </>
  );
}
export default AssignmentList;
