import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, originalPrice, discountedPrice } }) => {
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <div className="product-card">
                    <img
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{name}</p>
                    <p className="old-price">₹{originalPrice}</p>
                    <p className="product-price">₹{discountedPrice}</p>

                </div>
            </Link>
        </div>
    )
}

export default Product