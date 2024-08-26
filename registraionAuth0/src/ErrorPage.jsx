import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-white px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <p className="text-white mt-4 text-2xl font-semibold">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-300 mt-2">
          The page might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="mt-8 inline-block px-6 py-2 text-sm font-medium text-purple-600 bg-white rounded hover:bg-gray-200">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
