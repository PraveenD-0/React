 import React, { useContext } from 'react';
import { ProfileContext } from '../App';

 function Profile() {
    const { profileName, setProfileName } = useContext(ProfileContext);

     const profileNameHandler = (event) => {
        setProfileName(event.target.value);
    }

  return (
      <div>
          <h2>Profile Name: { profileName }</h2>
            <input
              placeholder='enter your profile name...' value={profileName} onChange={profileNameHandler}/>
    </div>
  )
}

export default Profile;