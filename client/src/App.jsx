import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import LogoutPage from "./routes/LogoutPage";
import SignupPage from "./routes/SignupPage"
import UsersListPage from "./routes/UsersListPage";
import ProjectsListPage from "./routes/ProjectsListPage";
import SignupSuccessPage from "./routes/SignupSuccess";
import SignupFailurePage from "./routes/SignupFailure";
import UserProfilePage from "./routes/UserProfilePage";
import DashboardPage from "./routes/DashboardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/users" element={<UsersListPage/>}/>
        <Route path="/projects" element={<ProjectsListPage/>}/>
        <Route path="/signup-success" element={<SignupSuccessPage/>}/>
        <Route path="/signup-failure" element={<SignupFailurePage/>}/>
        <Route path="/home" element={<DashboardPage/>}/>
        <Route path="/users/:username" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
