import React, { createContext, useState } from 'react';
import Profile from './components/Profile';

 
const ProfileContext = createContext();

 function App() {
    const [profileName, setProfileName] = useState('');
  return (
      <div>
           <ProfileContext.Provider value={{ profileName, setProfileName }}>
              <Profile />
          </ProfileContext.Provider>
    </div>
  )
}

export {App as default, ProfileContext};