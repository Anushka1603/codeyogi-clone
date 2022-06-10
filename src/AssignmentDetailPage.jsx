import React from "react";
function AssignmentDetailPage({ assignments }) {
  return (
    <div className="p-4 m-2 rounded-md shadow-lg">
      <div className="flex mt-4 justify-around"></div>

      <div> name= {assignments.name.title} </div>
    </div>
  );
}

export default AssignmentDetailPage;
