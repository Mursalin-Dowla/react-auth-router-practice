import React, { useState } from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import CustomLink from '../../../utilities/CustomLink';
import logo from './../../../images/logo.png'

const Header = () => {
    const [open,setOpen]=useState(false);
    const {user, unRegister} = useFirebase();
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-red-400 py-4 md:px-10 px-7'>
        <div className='md:ml-28'>
                <img className='w-10 h-8' src={logo} alt="" />
            </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-red-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[35px] ':'top-[-490px]'}`}>
        <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/explore'>Explore</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/bookings'>Bookings</CustomLink>
            {
              !user?.uid ?
              <CustomLink to='/login'>Login</CustomLink>
              :
             <span className='text-[blue] md:ml-8 text-xl md:my-0 my-7' ><span><img className='w-6 h-6 rounded-full' src={user?.photoURL} alt="" /></span></span> 
            }
            {
              user?.uid && <span className='text-white ml-2 cursor-pointer' onClick={unRegister}>SignOut</span>
            }
        </ul>
        </div>
      </div>
      </div>
    );
};

export default Header;

