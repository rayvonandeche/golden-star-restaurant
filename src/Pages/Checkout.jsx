import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Pages/CSS/Checkout.css'
import { useCart } from 'react-use-cart'
import CheckoutItem from '../Components/CheckoutItem/CheckoutItem'
import left_arrow from '../../src/assets/left-arrow-svgrepo-com.svg'
import exit_icon from '../../src/assets/exit-svgrepo-com.svg'


function Menu() {
  const navigate = useNavigate()

  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    removeItem,
    emptyCart } = useCart()


  return (
    <>
      <header className='menu-nav'>
        <img onClick={() => { navigate(-1) }} className="back" src={left_arrow} alt="" />
        <p>Checkout</p>
        <img className="exit" src={exit_icon} alt="" onClick={() => { navigate("/"); emptyCart() }} />
      </header>

      <div className='checkout-items'>
      {isEmpty ? <h1>Cart is Empty</h1> :
        items.map((item, i) => {
          return <CheckoutItem
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            quantity={item.quantity} />
        })}
        </div>
      <div className="totals">
        <div className="tot">
          <p>Total: </p>
          <p>KSh {cartTotal}</p>
        </div>
        <div className="pay">
          Complete Payment
        </div>
      </div>

    </>
  )
}

export default Menu