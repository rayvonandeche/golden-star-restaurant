import React, { useContext, useEffect } from 'react'
import logo from '../assets/logo.png'
import './CSS/Welcome.css'
import background_img from '../assets/pexels-ella-olsson-1640772.jpg'
import { useNavigate} from 'react-router-dom'
import { MyContext } from '../Components/Context/MyContext'

function Welcome() {
const navigate = useNavigate()


// useEffect(()=>{
//   if (login){
//     navigate("/home")
//   }
// },[login])

  return (
    <div className="container">
      <div className="welcome">
        <div className="welcome-text">
          <img className='bg img-fluid' src={background_img} alt="" />
          <p className='welcomes'>Welcome</p>
        </div>

        <div className="row">
          <img src={logo} alt="" />
          <p className="golden-star">Golden Star Restaurant</p>
        </div>
        
      </div>

      <div className="container-table">
        <p className='txt'>Find the table number on your table and enter it to continue</p>
        <div className="table-no">
          <p className='enter-table'>Enter Table Number</p>
          <form>
          <input type="text"  placeholder='table 1' required/>
          <input type="submit" value="Continue"
                 onClick={()=> navigate("/home") }  />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Welcome