import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import MobileLayer from './components/MobileLayer'

import Home from "./Home"
import ProductDetail from "./ProductDetail"

// COMPONENTS
import { IconContext } from "react-icons";
import { IoShirtOutline } from "react-icons/io5";
import { GiConverseShoe } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


function App() {
  return (
    <>
      <MobileLayer>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/productdetail" element={<ProductDetail />} />
          </Routes>
        </Router>
      </MobileLayer>
    </>
  )
}

export default App
