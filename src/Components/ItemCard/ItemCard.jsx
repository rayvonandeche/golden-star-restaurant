import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart'
import '../ItemCard/ItemCard.css'
import add_icon from '../../assets/add-ellipse-svgrepo-com.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ItemCard(props) {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const { addItem, inCart } = useCart()


  return (
    <>
      { inCart(props.id) ?
        <div data-aos="zoom-out"
          data-aos-duration={String(props.name.length * 10)}
          className='item-card' style={{ border: '1px solid #C84F00' }}>
          <img src={props.image} alt="" />
          <div className="item-card-txt">
            <p className='item-name'>{props.name}
              <img src={add_icon} alt="" onClick={() => addItem(props.item)} />
            </p>
            <p className='item-price'>KSh <span>{props.price}</span></p>
            <p className='item-desc'>{props.desc}</p>
          </div>
        </div> :
        <div data-aos="zoom-out"
          data-aos-duration={String(props.name.length * 10)}
          className='item-card' >
          <img src={props.image} alt="" />
          <div className="item-card-txt">
            <p className='item-name'>{props.name}
              <img src={add_icon} alt="" onClick={() => addItem(props.item)} />
            </p>
            <p className='item-price'>KSh <span>{props.price}</span></p>
            <p className='item-desc'>{props.desc}</p>
          </div>
        </div>}
    </>
  )
}


export default ItemCard
