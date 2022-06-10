import React from "react";

function LectureList() {
  return (
    <>
      <h1 className="text-2xl font-semibold pl-4 pt-16 pb-4">Session List</h1>

      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex items-center text-5xl justify-center px-4 py-4 mt-2 bg-gray-50 sm:px-6 lg:px-8">
          {" "}
          <div className="w-full max-w-4xl space-y-8">Lecture List</div>
        </div>
      </div>
    </>
  );
}

export default LectureList;
