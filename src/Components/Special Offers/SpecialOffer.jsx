import React from 'react'
import '../Special Offers/SpecialOffer.css'
import specialimg from '../../assets/pexels-ella-olsson-1640772.jpg'

function SpecialOffer() {
  return (
    <div className="special-container" >
      <div className="special" data-aos="zoom-out">
        <div className="special-txt">
          <h1>Special Offers</h1>
          <p>Buy One get One Free</p>
        </div>
        <div className="special-img">
          <img src={specialimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer