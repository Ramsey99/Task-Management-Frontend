import React, { useState } from 'react';
import { Link, redirect } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { login } from '../../api/auth';
import { saveToken } from '../../utils/storage';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    const userData = { email:username, password};
    console.log(userData);
    login(userData).then((res)=>{
      console.log(res.accessToken);
      saveToken(res.accessToken);
      redirect('/');
      
    }).catch((err)=>{
      console.log(err);
      
    })
    

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-sm mx-auto my-24 p-6 border border-gray-300 rounded shadow-lg bg-yellow-400">
      <h1 className="mb-5 text-2xl font-normal text-gray-800">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input
          label="Username"
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="relative mb-5">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}

            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        <Button type="submit">Log In</Button>
        <p className='mb-0 mt-4'>Don't have an account?</p>
        <Link to="/auth/register" className="mt-1 text-blue-700 hover:underline">
           Sign Up
        </Link>
      </form>
    </div>
  );
};

export default SignIn;