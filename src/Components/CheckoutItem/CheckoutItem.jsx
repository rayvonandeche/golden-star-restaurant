import React, { useContext } from 'react'
import '../CheckoutItem/CheckoutItem.css'
import up_arrow from '../../assets/up-2-svgrepo-com.svg'
import down_arrow from '../../assets/down-arrow-5-svgrepo-com.svg'
import { useCart } from 'react-use-cart'


function CheckoutItem(props) {

  const {updateItemQuantity, } = useCart()
  
  return (
    <div className="checkout-item">
      <img src={props.image} alt="" />
      <div className="checkout-desc">
        <p className='checkout-name'>{props.name}</p>
        <p className='checkout-price'>KSh {props.price}/=</p>
        <p className='checkout-total'>Ksh {props.price * props.quantity}</p>
      </div>
      <div className="icons">
        <img src={up_arrow} alt="" onClick={()=>updateItemQuantity(props.id, props.quantity + 1)} />
        <p>{props.quantity}</p>
        <img src={down_arrow} alt="" onClick={()=>updateItemQuantity(props.id, props.quantity - 1)}  />
      </div>
    </div>
  )
}

export default CheckoutItem