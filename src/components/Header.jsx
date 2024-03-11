import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link    } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

const Header = () => {

    const [isLogin, setIsLogin] = useState(false);

    const isOnline = useOnlineStatus();

    const cartItems = useSelector(state => state.cart.value);

    const handleClick = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className='flex flex-col lg:flex-row justify-between px-4 md:px-16 lg:px-24 py-1 items-center border border-solid border-gray-200 shadow-lg'>
            <div>
                <img className="w-20" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-list text-lg my-4 lg:my-0   w-full">
                <ul className='flex gap-4 md:gap-12 w-full justify-between md:justify-center  lg:justify-normal'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart" className='flex'>
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#787878"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#3d3d3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> ({cartItems.length})</Link></li>
                </ul>
            </div>
                    
            <div className="flex gap-6 my-4 lg:my-0 w-full lg:w-max justify-between lg:justify-normal   ">
            <span className='px-2 py-1 border border-solid border-gray-600 rounded-md'>Online Status: {isOnline === true ? "🟢" : "🔴"}</span>

                {!isLogin ? <button className="px-2 py-1 border border-solid border-green-600 bg-green-300 rounded-md" onClick={handleClick}>Login</button> :
                <button className="px-2 py-1 border border-solid border-red-600 bg-red-400 rounded-md text-slate-200" onClick={handleClick}>Logout</button>}

            </div>
        </div>
    );
};

export default Header