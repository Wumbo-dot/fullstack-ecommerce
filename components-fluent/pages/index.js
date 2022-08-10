import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div>
        <h2>Best Selling Products</h2>
        <p>Computer Parts That Are Available</p>
      </div>

      <div>
        {[ 'Product1', 'product2' ].map(
          (product) => product)}
      </div>

      Footer
    </>
  )
}

export default Home;