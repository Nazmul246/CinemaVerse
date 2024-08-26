import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className='flex items-center justify-center h-screen text-white'>
                <div className='text-xl'>Loading ...</div>
            </div>
        );
    }

    return (
        isAuthenticated && (
        
            <div className='flex items-center justify-center min-h-screen bg-black text-white p-6'>
                <div className='bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center'>
                    <img
                        src={user.picture}
                        alt={user.name}
                        className='w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400'
                    />
                    <h2 className='text-3xl font-bold mb-2'>{user.name}</h2>
                    <p className='text-lg mb-4'>{user.email}</p>
                    <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 lg:justify-center">
                        <Link
                            to="/"
                            className='bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors text-center whitespace-nowrap'
                        >
                            Go Home
                        </Link>
                        <Link
                            to="/movie-request"
                            className='bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors text-center whitespace-nowrap'
                        >
                            Request Movie
                        </Link>
                    </div>


                </div>
            </div>
        )
    );
}

export default UserProfile;
