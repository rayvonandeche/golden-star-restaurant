import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import '../MenuCategory/MenuCategory.css'

import appetizer_img from '../../assets/appetizer-beach-cocktail-2-svgrepo-com.svg'
import pizza_img from '../../assets/pizza-svgrepo-com.svg'
import beverage_img from '../../assets/beverage-drink-soda-svgrepo-com.svg'
import burger_img from '../../assets/burger-svgrepo-com.svg'
import dessert_img from '../../assets/dessert-svgrepo-com.svg'
import dishdot_img from '../../assets/dish-dot-svgrepo-com.svg'
import foodfish_img from '../../assets/food-dish-svgrepo-com.svg'
import sandwich_img from '../../assets/sandwich-svgrepo-com.svg'


function MenuCategory() {
  return (
    <>
    
    <div className='menu-category' data-aos="fade" data-aos-duration="1000" >
    <CategoryCard name="Appetizer" icon={appetizer_img} />
    <CategoryCard name="MainCourse" icon={foodfish_img}/>
    <CategoryCard name="Pizza" icon={pizza_img}/>
    <CategoryCard name="Burger" icon={burger_img}/>
    <CategoryCard name="Beverage" icon={beverage_img}/>
    <CategoryCard name="Dessert" icon={dessert_img}/>
    <CategoryCard name="Side Dish" icon={dishdot_img}/>
    <CategoryCard name="Sandwich" icon={sandwich_img}/>
    </div>
    </>
  )
}

export default MenuCategory