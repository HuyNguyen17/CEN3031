import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage"
import UsersListPage from "./routes/UsersListPage";
import UserProfile from "./routes/UserProfile";
import ProjectsListPage from "./routes/ProjectsListPage";
import SignupSuccessPage from "./routes/SignupSuccess";
import SignupFailurePage from "./routes/SignupFailure";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/users" element={<UsersListPage/>}/>
        <Route path="/profile/:username" element={<UserProfile/>}/>
        <Route path="/projects" element={<ProjectsListPage/>}/>
        <Route path="/signup-success" element={<SignupSuccessPage/>}/>
        <Route path="/signup-failure" element={<SignupFailurePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
