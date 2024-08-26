import React from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css'
import ErrorPage from './ErrorPage';
import Favorites from './components/Favorites/Favorites';
import UserProfile from './components/Profile/UserProfile';
import SearchResults from './components/Search/SearchResult';
import MovieDetail from './components/Movies/MovieDetail';
import SeriesDetail from './components/Series/SeriesDetail';
import SeriesHome from './components/Series/SeriesHome';
import MovieHome from './components/Movies/MovieHome';
import RequestForm from './components/RequestForm/RequestForm';
import ProtectedRoute from './components/RouteProtection/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/profiles",
        element: <UserProfile/>
      },
      {
        path: "/movies",
        element: <MovieHome />
      },
      {
        path: "/favorites",
        element: <Favorites/>,
      },
      {
        path: "/search",
        element: <SearchResults/>,
      },
      {
        path: "/series",
        element: <SeriesHome/>,
      },
      {
        path: "/movie/:id", 
        element: <MovieDetail/>,
      },
      {
        path: "/series/:id", // Route for TV show details
        element: <SeriesDetail/>,
      },
      {
        path: "/movie-request", 
        element: (
          <ProtectedRoute>
            <RequestForm />
          </ProtectedRoute>
        ),
      },

    ]
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-jd5eem2to6siuzcc.us.auth0.com"
    clientId="J0fyBlPYRyk1g7KKJyJB7sGqN709n0iB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
  ,
)