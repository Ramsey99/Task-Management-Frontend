import React, { useState } from 'react';
import SignIn from './SignIn/SignIn'; 
import SignUp from './SignUp/SignUp'; 

const Profile = ({ isLoggedIn, user, onLogin, onLogout }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="p-6 bg-white rounded shadow-lg w-full max-w-sm mx-auto">
      {isLoggedIn ? (
        <>
          <h2 className="text-xl font-bold text-center mb-4">User Profile</h2>
          <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
          <button
            onClick={onLogout}
            className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-center mb-4">{isSignup ? 'Sign Up' : 'Sign In'}</h2>
          {isSignup ? (
            <SignUp
              onSignup={(userData) => {
                onLogin(userData);
                setIsSignup(false);
              }}
            />
          ) : (
            <SignIn
              onLogin={(userData) => {
                onLogin(userData);
              }}
            />
          )}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="mt-4 text-blue-500 w-full text-center hover:underline"
          >
            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
