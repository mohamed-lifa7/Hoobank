import { useState } from 'react'
import {close, logo, menu} from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const toggleMenu = ()=>{
    setToggle((prev)=>!prev)
  }
  return (
    <nav className='w-full flex justify-between py-6 items-center navbar'>
      <img src={logo} alt="HooBank" className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end'>
        {navLinks.map((nav)=>{
          return(
            <li key={nav.id} className='font-poppins text-white cursor-pointer last:mr-0 mr-10'>
              <a href={`#${nav.id}`} >
                {nav.title}
              </a>
            </li>
          )          
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle?close: menu} onClick={()=>toggleMenu()} alt="menu" className='cursor-pointer w-[28px]'/>
        <div className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex justify-end flex-col'>
        {navLinks.map((nav)=>{
          return(
            <li key={nav.id} className='font-poppins text-white cursor-pointer last:mb-0 mb-4'>
              <a href={`#${nav.id}`} >
                {nav.title}
              </a>
            </li>
          )          
        })}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
