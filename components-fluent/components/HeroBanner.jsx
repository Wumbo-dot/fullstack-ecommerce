import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>Graphics Cards</p>
                <h3>You Want Them</h3>
                <h1>We Got Them</h1>
                {/* <img src='../../styles/GPU.jpg' alt='GPU' className='hero-banner-image' /> */}

                <div>
                    <Link href={``}>
                        <button type='button'>Buy Now</button>
                    </Link>
                    <div className='desc'>
                        <h5>Competetive Pricing</h5>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner