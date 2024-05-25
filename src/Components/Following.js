import React, { useState } from "react";
import followingData from "../following.json";
import { FollowingCard } from "./FollowingCard";

const following = followingData;
export const Following = () => {
  const [followingUser, setFollowingUser] = useState(following);
  return (
    <>
      <div className="bg-gray-700 p-6">
        <ul className="flex flex-wrap gap-5">
        {followingUser.map((item) => (
          <li key={item.id}>
          <FollowingCard {...item}  />
          </li>
        ))}
        </ul>
      </div>
    </>
  );
};
