import React from "react";

export const FollowersCard = ({ login, avatar_url, html_url }) => {
  const handleFollowers = () => {
    window.open(html_url, '_blank');
  };

  return (
    <div 
      className="bg-slate-300 flex flex-col items-center p-6 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105" 
      onClick={handleFollowers}
    >
      <img
        className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full border-4 border-gray-200 shadow-sm"
        src={avatar_url}
        alt="User Avatar"
      />
      <span className="text-zinc-900 font-semibold mt-4 text-base sm:text-lg md:text-xl">{login}</span>
    </div>
  );
};
