import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='w-full h-[5vw] flex justify-between items-center px-20 bg-slate-400 '>
        <div>
          <h5>Logo</h5>
        </div>
        <div className='gap-[5vw] flex'>
          <Link to='/'> Home</Link>
          <Link to='/Career'>Career</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Nav