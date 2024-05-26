import React from "react";

export const FollowingCard = ({ login, avatar_url,html_url }) => {
  const handleFollowing =()=>{
  window.open(html_url,'_blank')
  }
  return (
    <div className="bg-slate-300 flex flex-col items-center p-6 rounded-lg shadow-md cursor-pointer" onClick={handleFollowing}>
      <img
        className="h-36 w-36 rounded-full border-4 border-gray-200 shadow-sm"
        src={avatar_url}
        alt="User Avatar"
      />
      <span className="text-zinc-900 font-semibold mt-4 text-lg">{login}</span>
    </div>
  );
};
