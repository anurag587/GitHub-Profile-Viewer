import React, { useEffect, useState } from 'react'
import mockData from "../mock.json";
import { FollowersCard } from './FollowersCard';

const userData = mockData.userData;
export const Followers = () => {
  const [followerData, setFollowerData] = useState([])
  const fetchFollowers = async() =>{
    try {
      const res = await fetch(userData?.followers_url)
    const data = await res.json();
    setFollowerData(data);
    console.log("followers",data);
    } catch (error) {
      console.error(error)
    }
    
  }
  useEffect (()=>{
    fetchFollowers();
  },[followerData])
  return (
    <>
    <div className=' bg-gray-700'>
      {/* <h2 className='text-white'>Followers:</h2> */}
      <div className=" flex flex-wrap gap-5 p-5">
        {followerData.map((item) => (
          <FollowersCard key={item.id} {...item} />
        ))}
      </div>
    </div>
    </>
  )
}
