import React from "react";
import QuizPage from "./QuizPage";
import LectureList from "./LectureList";
import AssignmentList from "./AssignmentList";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import StudentList from "./StudentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/lectures" />}></Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="assignments" element={<AssignmentList />} />
          <Route path="lectures" element={<LectureList />} />
          <Route path="students" element={<StudentList />} />
        </Route>
        <Route path="quiz" element={<QuizPage name="Anushka" />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
