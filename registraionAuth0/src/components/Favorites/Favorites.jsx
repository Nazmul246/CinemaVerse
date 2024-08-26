import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Favorites = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div
        className='text-2xl text-white font-bold text-center '
        style={{
          color: '#FFD700',
          backgroundImage: 'url(/assets/images/coming-soon.jpg)',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          minHeight: '92vh' 
        }}
      >
        
        {/* We're Sorry! {user.name}<br /><br />
        It looks like our Favorites feature isn't available right now. We're working hard to bring it to you as soon as possible. Please check back later! */}
      </div>
    )
  );
}

export default Favorites;
