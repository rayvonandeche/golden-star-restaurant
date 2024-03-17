import React, { useContext, useState } from 'react'
import '../Pages/CSS/Menu.css'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../Components/Context/MyContext'

import left_arrow from '../../src/assets/left-arrow-svgrepo-com.svg'
import search_icon from '../../src/assets/search-alt-1-svgrepo-com.svg'
import exit_icon from '../../src/assets/exit-svgrepo-com.svg'
import ItemCard from '../Components/ItemCard/ItemCard'
import { useCart } from 'react-use-cart'



function Menu() {
  const navigate = useNavigate()
  const [category, setCategory] = useState("main")
  const [search, setSearch] = useState(false)

  const [search_letter, setSearch_letter] = useState("")

  const { totalUniqueItems, isEmpty, emptyCart } = useCart()

  const { all_items } = useContext(MyContext)

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch_letter(e.target.value)
  }

  return (
    <>
      <header className='menu-nav'>
        <img onClick={() => { navigate(-1) }} className="back" src={left_arrow} alt="" />
        {!search ? <p>Menu</p> : <input type="search" onChange={handleSearch}/>}
        <img onClick={() => { setSearch(prev => !prev) }} className='search' src={search_icon} alt="" />
        <img className="exit" src={exit_icon} alt="" onClick={() => { navigate("/"); emptyCart() }} />

      </header>
      <div className="menu-categories">
        <p onClick={() => { setCategory("appetizer") }}>Appetizer {category === "appetizer" ? <hr /> : null}</p>
        <p onClick={() => { setCategory("main") }}>Main Course {category === "main" ? <hr /> : null} </p>
        <p onClick={() => { setCategory("pizza") }}>Pizza {category === "pizza" ? <hr /> : null}</p>
        <p onClick={() => { setCategory("burger") }}>Burger {category === "burger" ? <hr /> : null} </p>
        <p onClick={() => { setCategory("beverage") }}>Beverage {category === "beverage" ? <hr /> : null}</p>
        <p onClick={() => { setCategory("dessert") }}>Dessert {category === "dessert" ? <hr /> : null}</p>
        <p onClick={() => { setCategory("side") }}>Side Dish {category === "side" ? <hr /> : null}</p>
        <p onClick={() => { setCategory("sandwich") }}>Sandwich {category === "sandwich" ? <hr /> : null}</p>
      </div>


      <div className="menu-items">
        {all_items.map((item, i) => {
  
          let to_find = item.name.split("")

          if (category === item.category ) {
           
            return <ItemCard
              item={item}
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              desc={item.desc} />
          }
        })}

      </div>

      <div className="menu-checkout">
        <div className="checkout" onClick={() => { isEmpty ? window.alert("Choose Item") : navigate('/checkout') }}>
          <p className='checkout-txt'>Checkout Order</p>
          {isEmpty ? null : <>
            <p className='chekcot-num'>{totalUniqueItems}</p></>}
        </div>
      </div>


    </>
  )
}

export default Menu
