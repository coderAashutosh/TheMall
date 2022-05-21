import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, wishlistItems, setShowWishlist, toggleWishlistItemQuanitity, onRemove } = useStateContext();

    // localStorage.setItem('wishlistItem', JSON.stringify(wishlistItems))
    // wishlistItem: localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : []

    // MAIN METHOD FOR LOCAL STORAGE

    const [cartItems, setCartItems] = useState([wishlistItems])

    // Local Storage: setting & getting data
    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems'))

        if (cartItemsData) {
            setCartItems(cartItemsData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        const itemFromStorage = JSON.parse(localStorage.getItem('cartItems'))
    }, [cartItems])

    // METHOD FOR LOCAL STORAGE USING useEffect

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(wishlistItems))
    // }), [wishlistItems]

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button
                    type="button"
                    className="cart-heading"
                    onClick={() => setShowWishlist(false)}>
                    <AiOutlineLeft />
                    <span className="heading">Your Favorites</span>
                    <span className="cart-num-items">({totalQuantities} items)</span>
                </button>

                {wishlistItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150} />
                        <h3>Go Find Some Perfect Pairs For Yourself.</h3>
                        <Link href="/">
                            <button
                                type="button"
                                onClick={() => setShowWishlist(false)}
                                className="btn"
                            >
                                Explore Now
                            </button>
                        </Link>
                    </div>
                )}

                <div className="product-container">
                    {wishlistItems.length >= 1 && wishlistItems.map((item) => (
                        <div className="product" key={item._id}>
                            <img src={urlFor(item?.image[0])} className="cart-product-image" />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{item.name}</h5>
                                    <h4>₹{item.discountedPrice}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <p className="quantity-desc">
                                            <span className="minus" onClick={() => toggleWishlistItemQuanitity(item._id, 'dec')}>
                                                <AiOutlineMinus />
                                            </span>
                                            <span className="num" onClick="">{item.quantity}</span>
                                            <span className="plus" onClick={() => toggleWishlistItemQuanitity(item._id, 'inc')}>
                                                <AiOutlinePlus />
                                            </span>
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-item"
                                        onClick={() => onRemove(item)}
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {wishlistItems.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal:</h3>
                            <h3>₹{totalPrice}</h3>
                        </div>
                        <div className="btn-container">
                            <button type="button" className="btn" onClick=''>
                                Contact To Get Best Deal !
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Cart