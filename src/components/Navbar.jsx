import React, { useState } from 'react'
import { nav } from '../store/data'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    const [ clicked, setClicked ] = useState(true)

    const handleClicked = () => {
        setClicked(!clicked)
        if(clicked){
            document.body.style.overflowY = 'hidden'
        }else{
            document.body.style.overflowY = 'visible'
        }
    }
  return (
    <div className='flex items-center justify-between bg-zinc-700 sticky top-0 z-50 p-3'>
        <Link to='/'>
            <h1 
                className='text-gray-200 text-2xl font-[500]'
            >
                LazyDev<span className='text-red-800'>Flix</span>
            </h1>
        </Link>
        <ul className='hidden text-black md:flex gap-3 items-center'>
            {
                nav.map(items => (
                    <Link to={`movies${items.link}`} key={items.id} className='cursor-pointer font-medium text-xl hover:text-slate-500 p-3 hover:bg-red-800 transition-all ease-in-out duration-300'>{items.name}</Link>
                ))
            }
        </ul>
        <FontAwesomeIcon icon={faBars} onClick={handleClicked} className='md:hidden'/>
        <ul className={`${clicked ?  'transform translate-x-full' : 'transform translate-x-0'} md:hidden text-black bg-slate-100 fixed h-screen top-[55px] right-0 flex flex-col gap-3 items-center ease-out duration-300 transition all`}>
            {
                nav.map(items => (
                    <Link to={`movies${items.link}`} key={items.id} className='cursor-pointer font-medium text-xl hover:text-slate-500 p-3 hover:bg-red-800 transition-all ease-in-out duration-300'>{items.name}</Link>
                ))
            }
        </ul>
    </div>
  )
}
