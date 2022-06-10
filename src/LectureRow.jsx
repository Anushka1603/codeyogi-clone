import React from "react";
import MDEditor from "@uiw/react-md-editor";

function LectureRow({ lecture }) {
  return (
    <div className="p-4 m-2 text-lg text-black bg-white rounded-md shadow-lg">
      <MDEditor.Markdown
        className="!text-yellow-500 !bg-white "
        source={lecture.topic}
      />
    </div>
  );
}
export default LectureRow;
