import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    React.useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
