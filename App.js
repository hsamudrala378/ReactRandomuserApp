import React, { useState, useEffect } from 'react';

const App = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setProfile(data.results[0]))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  if (!profile) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="w-[624px] h-[334px] bg-white rounded-xl shadow-lg p-6 border-4 border-indigo-600">
        <div className="flex w-full h-full p-4 border-4 border-indigo-600" style={{ padding: '10%' }}>
          {/* Profile Image (40% width) */}
          <img
            className="w-40 h-40 rounded-full border-4 border-indigo-600 shadow-md transform transition-transform duration-500 hover:scale-105"
            src={profile.picture.large}
            alt="Profile"
          />

          {/* Profile Details (60% width) */}
          <div className="flex flex-col justify-center space-y-4 ml-6 w-3/5">
            <h2 className="text-2xl font-semibold text-indigo-800 capitalize tracking-wide">
              {profile.name.first} {profile.name.last}
            </h2>
            <p className="text-lg text-gray-700">{profile.gender}</p>
            <p className="text-lg text-gray-700">{profile.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
