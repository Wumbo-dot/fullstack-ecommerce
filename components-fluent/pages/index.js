import React from 'react'
import { product, FooterBanner, HeroBanner } from '../components';
import { client }from '../lib/client';
const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Computer Parts That Are Available</p>
      </div>

      <div className='products-container'>
        {[ 'Product1', 'product2' ].map(
          (product) => product)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home;