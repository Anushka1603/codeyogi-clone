import React from "react";
import SideBar from "./SideBar";
import LecturesList from "./LectureList";
import AssignmentList from "./AssignmentList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NoPage from "./NotFound";
import QuizPage from "./QuizPage";
import AssignmentDetailList from "./AssignmentDetail";
import ProfilePage from "./ProfilePage";
import UserProfileList from "./UserList";
import AlertContext from "./AlertContext";
import Alerts from "./Alerts";
import { uniqueId } from "lodash";

function App() {
  const [alerts, setAlert] = React.useState([]);

  const showAlert = (message, type = "success", dissmiss = 2) => {
    const Id = uniqueId();
    const alert = { message, type, Id };

    setAlert([...alerts, alert]);
    dissmiss &&
      setTimeout(() => {
        removeAlert(alert);
      }, dissmiss * 1000);
  };
  const removeAlert = (alert) => {
    setAlert((newOne) => newOne.filter((a) => a.Id !== alert.Id));
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert, removeAlert }}>
      <Alerts />

      <BrowserRouter>
        <Routes>
          <Route path="quiz" element={<QuizPage name="Anushka" />} />
          <Route path="/" element={<SideBar />}>
            <Route index element={<Navigate to="/lectures" />} />
            <Route path="students" element={<UserProfileList />} />
            <Route path="assignments" element={<AssignmentList />} />
            <Route path="lectures" element={<LecturesList />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route
              path="assignments/:id/detail"
              element={<AssignmentDetailList />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </AlertContext.Provider>
  );
}

export default App;
