import React, { useState,useEffect } from "react";
import followingData from "../following.json";
import { FollowingCard } from "./FollowingCard";
import { useParams } from "react-router-dom";

//const following = followingData;
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
