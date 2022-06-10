import React from "react";
import { Link } from "react-router-dom";

function QuizPage(props) {
  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="bg-gray-800 flex flex-column h-16">
          {" "}
          <img
            className="w-12 h-14 ml-10 "
            src="https://app.codeyogi.io/assets/CodeYogiLogoEnglishWhite.a677159f.svg"
          />
          <span className="text-white text-xl pt-4 pl-4">
            | Welcome {props.name}
          </span>
        </div>
        <h1 className="text-black flex justify-center mt-64">
          No Active Question
        </h1>
        <Link to="/lectures" className="text-red-500 flex justify-center">
          Go to lectures page.
        </Link>
      </div>
    </>
  );
}
export default QuizPage;
