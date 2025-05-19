import React from 'react'
import Banner from './Banner'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Home = () => {

  let image1 = '/public/Image/banner-1.jpg'
  let image2 = '/public/Image/banner-2.jpg'
  ''
  const images = [
  image1,
  image2
];


  return (
    <div className='bg-gray-200'>
     
       <Banner images ={images}/>
      <Products/>
      <Products/>
      <Newsletter/>
      <Footer/>


    </div>
  )
}

export default Home