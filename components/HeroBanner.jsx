import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText1}</h1>
                <h3>{heroBanner.largeText2}</h3>
                <img src={urlFor(heroBanner.image)}
                    width={450}
                    height={450}
                    alt='footwear' className='hero-banner-image' />

                <div>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button type='button'>{heroBanner.buttonText}</button>
                    </Link>

                    <div className="desc">
                        <h5>{heroBanner.discount}</h5>
                        <p>{heroBanner.desc}</p>
                        {/* <h5>{heroBanner.SaleTime}</h5> */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HeroBanner