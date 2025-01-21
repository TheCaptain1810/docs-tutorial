import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Link href='/documents/123'>
        <span className='text-blue-500 underline'>Click Here</span>
      </Link>
    </div>
  )
}

export default Home