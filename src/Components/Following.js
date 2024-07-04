import React, { useState, useEffect } from "react";
import { FollowingCard } from "./FollowingCard";
import { useParams } from "react-router-dom";

export const Following = () => {
  const [followingUser, setFollowingUser] = useState([]);

  const params = useParams();
  const { username } = params;

  const fetchFollowing = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/following`);
      const data = await res.json();
      setFollowingUser(data);
      console.log("following", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFollowing();
  }, [username]);

  return (
    <>
      <div className="bg-gray-700 p-6">
        <ul className="flex flex-wrap gap-5 justify-center">
          {followingUser.map((item) => (
            <li key={item.id} className="list-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <FollowingCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
