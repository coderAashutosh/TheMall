import React from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa'

import { Wishlist } from './'
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
    const { showWishlist, setShowWishlist, totalQuantities } = useStateContext();
    return (
        <div className='navbar-container'>
            <p className='logo'>
                <Link href='/'>THE MALL</Link>
                <img src=''></img>
            </p>

            <button type='button' className='cart-icon' onClick={() => setShowWishlist(true)}>
                <FaHeart style={{ color: 'rgba(255, 0, 0, 0.8)' }} />
                <span className='cart-item-qty'>{totalQuantities}</span>
            </button>

            {showWishlist && <Wishlist />}
        </div>
    )
}

export default Navbar