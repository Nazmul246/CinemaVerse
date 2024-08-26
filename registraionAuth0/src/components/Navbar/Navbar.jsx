import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FiSearch } from 'react-icons/fi';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHr, setMenuHr] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const favoritesAuth = () => {
    Swal.fire('Please Sign Up to Access Your Favorite List');
  };

  const profileAuth = () => {
    Swal.fire('Please Sign Up to View Your Profile');
  };

  return (
    <nav className="fixed w-full z-20 bg-black bg-opacity-50 md:bg-gray-400 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left-aligned MovieStore */}
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              <h1 className='font-alegreya font-bold text-3xl text-yellow-300'>CINEVERSE</h1>
            </Link>
          </div>
          {/* Centered Links */}
          <div className="hidden md:flex justify-center flex-grow">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" onClick={() => { setMenuHr('home'); }}>
                Home{menuHr === 'home' ? <hr /> : ''}
              </Link>

              <Link to="/movies" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" onClick={() => { setMenuHr('movies'); }}>
                Movies{menuHr === 'movies' ? <hr /> : ''}
              </Link>

              <Link to="/series" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" onClick={() => { setMenuHr('series'); }}>
                Series{menuHr === 'series' ? <hr /> : ''}
              </Link>

              <Link to={isAuthenticated ? '/favorites' : '#'}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                onClick={(e) => {
                  if (!isAuthenticated) {
                    e.preventDefault();
                    favoritesAuth();
                  } else {
                    setMenuHr('favorites');
                  }
                }}
              >
                Favorites {menuHr === 'favorites' ? <hr /> : <></>}
              </Link>
              <Link to={isAuthenticated ? '/profiles' : '#'}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                onClick={(e) => {
                  if (!isAuthenticated) {
                    e.preventDefault();
                    profileAuth();
                  } else {
                    setMenuHr('profile');
                  }
                }}
              >
                Profile {menuHr === 'profile' ? <hr /> : <></>}
              </Link>
            </div>
          </div>
          {/* Search Input */}
          <div className="flex items-center space-x-2 ml-4"> {/* Added margin-left */}
            <button
              onClick={toggleSearch}
              className="md:hidden p-2 text-white hover:bg-gray-700 rounded-md"
            >
              <FiSearch className="w-6 h-6" />
            </button>
            <form
              onSubmit={handleSearch}
              className={`flex items-center ${isSearchOpen ? 'block' : 'hidden'} md:hidden absolute top-16 right-0 bg-black p-2 rounded-md`}
            >
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="p-2 w-48 rounded-md outline-none"
              />
              <button type="submit" className="p-2 bg-black text-white rounded-md">
                Search
              </button>
            </form>
          </div>
          {/* Right-aligned Auth Button */}
          <div className="hidden md:flex items-center space-x-4 ml-4"> {/* Added margin-left */}
            {isAuthenticated ? (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Login
              </button>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/movies" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Movies
            </Link>
            <Link to="/series" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Series
            </Link>
            <Link to={isAuthenticated ? '/favorites' : '#'}
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => {
                if (!isAuthenticated) {
                  e.preventDefault();
                  favoritesAuth();
                } else {
                  setMenuHr('favorites');
                }
              }}
            >
              Favorites
            </Link>
            <Link to={isAuthenticated ? '/profiles' : '#'} 
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => {
                if (!isAuthenticated) {
                  e.preventDefault();
                  profileAuth();
                } else {
                  setMenuHr('profile');
                }
              }}
            >
              Profile
            </Link>
            {isAuthenticated ? (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Login
              </button>
            )}
            <form
              onSubmit={handleSearch}
              className="flex items-center mt-4"
            >
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="p-2 w-full rounded-md outline-none"
              />
              <button type="submit" className="p-2 bg-black text-white rounded-md">
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
