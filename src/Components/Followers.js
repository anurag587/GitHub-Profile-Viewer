import React, { useEffect, useState } from "react";
import mockData from "../mock.json";
import { FollowersCard } from "./FollowersCard";
import { useParams } from "react-router-dom";

//const userData = mockData.userData;
export const Followers = () => {
  const [followerData, setFollowerData] = useState([]);
  const params = useParams();
  const { username } = params;
 
  const fetchFollowers = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/followers`);
      const data = await res.json();
      setFollowerData(data);
      console.log("followers", data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchFollowers()
  }, [username]);
  return (
    <>
      <div className="bg-gray-700 p-6">
        <ul className="flex flex-wrap gap-5">
          {followerData.map((item) => (
            <li key={item.id} className="list-none">
              <FollowersCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
