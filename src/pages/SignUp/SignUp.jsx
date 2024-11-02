import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {signup} from "../../api/auth"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [ph_no, setPhNo] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [con_password, setConfirmPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    
    if (password !== con_password) {
      setError("Passwords do not match");
      return;
    }
    // Handle sign-up logic
    const userData = { username, email, ph_no, address, password, con_password, profession };
    console.log(userData);
    signup(userData).then((res)=>{
       alert(res.message);
       
    }).catch((err)=>{
   console.log(err);
   
    })
    setError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  

  return (
    <div className="max-w-sm mx-auto my-6 p-6 border border-gray-300 rounded shadow-lg bg-yellow-400">
      <h1 className="mb-4 text-2xl font-medium text-gray-800">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">

        <div className="flex flex-wrap mb-2">
          <div className="flex-1 mr-2">
            <Input
              label="Username"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex-1 ml-2">
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Phone Number and Address side by side */}
        <div className="flex flex-wrap mb-2">
          <div className="flex-1 mr-2">
            <Input
              label="Phone Number"
              type="tel"
              id="ph_no"
              name="ph_no"
              value={ph_no}
              onChange={(e) => setPhNo(e.target.value)}
              required
            />
          </div>
          <div className="flex-1 ml-2">
            <Input
              label="Address"
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Profession field */}
        <div className="mb-2">
          <Input
            label="Profession"
            type="text"
            id="profession"
            name="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </div>

        {/* Password and Confirm Password */}
        <div className="flex flex-wrap mb-2">
          <div className="flex-1 mr-2 relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
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
          <div className="flex-1 ml-2 relative">
            <Input
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              value={con_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
              />
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 mt-4 text-white py-2 px-4 rounded transition"
        >
          Sign Up
        </Button>
        <p className="mt-4">Already have an account?</p>
        <Link to="/" className="text-blue-700 hover:underline mt-1">
          Sign In
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
