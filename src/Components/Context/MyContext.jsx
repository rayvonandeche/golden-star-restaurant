import React, { createContext, useState } from 'react'
import all_items from '../../assets/ItemsIMG/Items'

export const MyContext = createContext([])

function MyContextProvider(props) {

  // const [login, setLogin] = useState([])


  // const [touchStart, setTouchStart] = useState(null)
  // const [touchEnd, setTouchEnd] = useState(null)

  // // the required distance between touchStart and touchEnd to be detected as a swipe
  // const minSwipeDistance = 50

  // const onTouchStart = (e) => {
  //   setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  //   setTouchStart(e.targetTouches[0].clientX)
  // }

  // const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  // const onTouchEnd = () => {
  //   if (!touchStart || !touchEnd) return
  //   const distance = touchStart - touchEnd
  //   const isLeftSwipe = distance > minSwipeDistance
  //   const isRightSwipe = distance < -minSwipeDistance
  //   if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
  //   // add your conditional logic here
  // }



  const contextValue = {
    all_items
  }

  return (

    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyContextProvider