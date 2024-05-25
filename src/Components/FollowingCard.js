import React from "react";

export const FollowingCard = ({ login, avatar_url }) => {
  return (
    <div className="bg-slate-300 flex flex-col items-center p-6 rounded-lg shadow-md">
      <img
        className="h-36 w-36 rounded-full border-4 border-gray-200 shadow-sm"
        src={avatar_url}
        alt="User Avatar"
      />
      <span className="text-zinc-900 font-semibold mt-4 text-lg">{login}</span>
    </div>
  );
};
