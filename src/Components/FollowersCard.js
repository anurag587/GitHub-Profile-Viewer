import React from 'react'

export const FollowersCard = ({
    login,
    avatar_url
}) => {
  return (
    <div className='bg-slate-300 flex flex-col items-center' >
      <img className='h-36 w-36' 
      src={avatar_url}/>
    <span className='text-zinc-900 '>{login}</span>
    </div>
  )
}
