import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>
                2022 Components-Fluid  All Rights Reserved.
                <p className='icons'>
                    <AiFillInstagram />
                    <AiOutlineTwitter />
                </p>
            </p>
        </div>
    )
}

export default Footer