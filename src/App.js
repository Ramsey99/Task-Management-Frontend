import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import TaskList from "./pages/TaskList";
import MainLayout from "./layout/MainLayout";
import AddCategory from "./pages/AddCategory";
import AddTask from "./pages/AddTask";
import AuthLayout from "./layout/AuthLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<ProtectedRoute element={<MainLayout />} />}>
            <Route path="add-category" element={<AddCategory />} />
            <Route path="" element={<TaskList />} />
            <Route path="add-task" element={<AddTask />} />
          </Route>
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
          </Route>
              
        </Routes>
      </div>
    </Router>
  );
}

export default App;
