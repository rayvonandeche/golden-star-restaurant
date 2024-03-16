import React from 'react'
import '../CategoryCard/CategoryCard.css'
import { useNavigate } from 'react-router-dom'

function CategoryCard(props) {
  const navigate = useNavigate()

  return (
    <div onClick={() => { navigate("/menu") }} className="category-card">
      <div className="category-icon">
        <img src={props.icon} alt="" />
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default CategoryCard