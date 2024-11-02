import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";


const Sidebar = ({ onSelect }) => {
  const [showAuth, setShowAuth] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const authRef = useRef();

  const toggleAuth = (signup = false) => {
    setIsSignUp(signup);
    setShowAuth(!showAuth);
  };

  const closeAuthModal = () => {
    setShowAuth(false);
    setIsSignUp(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (authRef.current && !authRef.current.contains(event.target)) {
        closeAuthModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Add Category", action: "/add-Category" },
    { label: "Add Task", action: "/add-task" },
    { label: "Task List", action: "/" },
    { label: "Profile", action: () => toggleAuth(), icon: faUser },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out z-50">
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
        Task Manager
      </h2>
      <ul>
        {navItems.map((item, index) => (
          // <li
          //   key={index}
          //   className="p-4 hover:bg-gray-700 cursor-pointer transition duration-200"
          //   onClick={() => (typeof item.action === 'function' ? item.action() : onSelect(item.action))}
          // >
          //   {item.icon && <FontAwesomeIcon icon={item.icon} className="mr-2" />}
          //   {item.label}
          // </li>
          <li
            key={index}
            className="p-4 hover:bg-gray-700 cursor-pointer transition duration-200"
          >
            <Link to={item.action}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {showAuth && (
        <div
          ref={authRef}
          className="absolute top-0 left-64 w-80 bg-gray-200 text-black p-4 shadow-lg rounded"
        >
          {isSignUp ? <SignUp /> : <SignIn />}
          {/* <button onClick={() => setIsSignUp(!isSignUp)} className="mt-2 text-blue-500">
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
