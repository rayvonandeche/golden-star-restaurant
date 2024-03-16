import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MyContextProvider, { MyContext } from "./Components/Context/MyContext";
import { CartProvider } from "react-use-cart";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout"
import Menu from "./Pages/Menu";

const App = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  // const {login, setLogin} = useContext(MyContext)

  return (
    <>
      <MyContextProvider>
        <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </MyContextProvider>
    </>
  );
}

export default App;
