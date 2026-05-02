import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-9'>iTask</span>
        </div>
        <u1 className="flex gap-5 mx-9"></u1>
        <li className='cursor-pointer hover: font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover: font-bold transition-all'>Your Tasks</li>

    </nav>
  )
}

export default Navbar