"use client"
import React, { useEffect } from 'react'

export default function error({error, reset}) {

  useEffect(() => {
    console.log(error);
  }, [error])

  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong. Please, try again later.</h1>
      <button className='hover:text-amber-600 bg-gray-800 p-2 mt-2 rounded' onClick={() => reset()}>Try Again</button>
    </div>
  )
}
