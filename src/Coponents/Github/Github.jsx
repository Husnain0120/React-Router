import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/Husnain0120')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //             setData(data)
    //     })
    // },[])
    const data = useLoaderData()
  return (
    <div className=' text-center m-4 
    bg-gray-600 text-white p-4 text-3xl rounded 
    my-10 shadow-xl shadow-pink-600 '
    >
     <h1 className='my-5 text-orange-500 font-thin text-2xl 
     '>
         Github followers : {data.followers}
     </h1>
      <img className=' rounded-full' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
 export const githubloder = async()=>{
  const Response = await fetch('http://api.github.com/users/Husnain0120')
return Response.json()

 }