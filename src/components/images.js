import React from "react"
import './images.css'

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img13 from '../images/img13.jpg'
import img14 from '../images/img14.jpg'
import img15 from '../images/img15.jpg'
import img16 from '../images/img16.jpg'

const Images = () => {
  return(
    <div className='masonry'>
      <div className='item'><img src={img1} alt='Img1' /></div>
      <div className='item'><img src={img2} alt='Img2' /></div>
      <div className='item'><img src={img3} alt='Img3' /></div>
      <div className='item'><img src={img4} alt='Img4' /></div>
      <div className='item'><img src={img9} alt='Img9' /></div>
      <div className='item'><img src={img6} alt='Img6' /></div>
      <div className='item'><img src={img7} alt='Img7' /></div>
      <div className='item'><img src={img5} alt='Img5' /></div>
      <div className='item'><img src={img10} alt='Img10' /></div>
      <div className='item'><img src={img8} alt='Img8' /></div>
      <div className='item'><img src={img11} alt='Img11' /></div>
      <div className='item'><img src={img12} alt='Img12' /></div>
      <div className='item'><img src={img13} alt='Img13' /></div>
      <div className='item'><img src={img14} alt='Img14' /></div>
      <div className='item'><img src={img15} alt='Img15' /></div>
      <div className='item'><img src={img16} alt='Img16' /></div>
    </div>
  );
}

export default Images;