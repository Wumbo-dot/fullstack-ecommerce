import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
const FooterBanner = ({ FooterBanner }) => {
    return (
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                    <h2> {FooterBanner.smallText}</h2>
                </div>
                <div className='right'>
                    <h1>{FooterBanner.largeText1}</h1>
                </div>
                
            </div>
        </div>
    )
}

export default FooterBanner;