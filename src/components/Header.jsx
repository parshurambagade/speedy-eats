import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';


const Header = () => {

    const [isLogin, setIsLogin] = useState(false);

    const isOnline = useOnlineStatus();

    const cart = useSelector((state) => state.cart.value);

    console.log(cart);

    const handleClick = () => {
        setIsLogin(!isLogin);
    }


    return (
        <div className='flex justify-between px-24 py-1 items-center border border-solid border-gray-200 shadow-lg'>
            <div>
                <img className="w-20" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-list text-lg">
                <ul className='flex gap-12 '>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cart">Cart ({cart.length})</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
                
            <div className="flex gap-6">
            <span className='px-2 py-1 border border-solid border-gray-600 rounded-md'>Online Status: {isOnline === true ? "🟢" : "🔴"}</span>

                {!isLogin ? <button className="px-2 py-1 border border-solid border-green-600 bg-green-300 rounded-md" onClick={handleClick}>Login</button> :
                <button className="px-2 py-1 border border-solid border-red-600 bg-red-400 rounded-md text-slate-200" onClick={handleClick}>Logout</button>}


            </div>
        </div>
    );
};

export default Header