import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showWishlist, setShowWishlist] = useState(false)
    const [wishlistItems, setWishlistItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setqty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInWishlist = wishlistItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.discountedPrice * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if (checkProductInWishlist) {
            const updatedWishlistItems = wishlistItems.map((wishlistProduct) => {
                if (wishlistProduct._id === product._id) return {
                    ...wishlistProduct,
                    quantity: wishlistProduct.quantity + quantity
                }
            })

            setWishlistItems(updatedWishlistItems);
        } else {
            product.quantity = quantity;

            setWishlistItems([...wishlistItems, { ...product }]);
        }

        toast.success(`${qty} ${product.name} added to the Wishlist.`);

    }

    const onRemove = (product) => {
        foundProduct = wishlistItems.find((item) => item._id === product._id);
        const newWishlistItems = wishlistItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.discountedPrice * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setWishlistItems(newWishlistItems);
    }

    const toggleWishlistItemQuanitity = (id, value) => {
        foundProduct = wishlistItems.find((item) => item._id === id)
        index = wishlistItems.findIndex((product) => product._id === id);
        const newWishlistItems = wishlistItems.filter((item) => item._id !== id)

        if (value === 'inc') {
            setWishlistItems([...newWishlistItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.discountedPrice)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setWishlistItems([...newWishlistItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
            }
        }
    }

    const incrementQty = () => {
        setqty((prevQty) => prevQty + 1)
    }

    const decrementQty = () => {
        setqty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        })
    }

    return (
        <Context.Provider
            value={{
                showWishlist,
                setShowWishlist,
                wishlistItems,
                totalPrice,
                totalQuantities,
                qty,
                incrementQty,
                decrementQty,
                onAdd,
                toggleWishlistItemQuanitity,
                onRemove
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);