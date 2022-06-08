import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {

    useEffect(() => {
        runFireworks();
    })

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for Choosing Us!</h2>
                <p className="email-msg">Please Call Us on The Given Below Contact Number to Book your Order</p>
                <p className="email-msg">
                    <ol>
                        <li>+919812055877</li>
                        <li>+917015772028</li>
                    </ol>
                </p>
                <p className="description">
                    If you have any questions, please email us at
                    <a className="email" href="mailto:themallmidtown@gmail.com">
                        TheMallMidtown
                    </a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success