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
  const [count, setCount] = useState(0)

  const [hoverIndex, setHoverIndex] = useState(null)

  const onMouseEnter = (index) => {
    setHoverIndex(index)
  }

  const onMouseLeave = () => {
    setHoverIndex(null)
  }

  const [category, setCategory] = useState([
    {
      id: 1,
      category: 'Apparel',
      icon: <IoShirtOutline />,
    },
    {
      id: 2,
      category: 'Shoes',
      icon: <GiConverseShoe />,
    },
    {
      id: 3,
      category: 'Accessories',
      icon: <BsEmojiHeartEyes />,
    },
    {
      id: 4,
      category: 'Electronics',
      icon: <GiElectric />,
    },
  ])
  
  const [productList, setProductList] = useState([
    {
      id: 1,
      image: "",
      Name: "Cotton Shirt",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$150",
      discount: "$112",
      color: [
        {
          id: 1,
          warna: "bg-blue-200"
        },
        {
          id: 2,
          warna: "bg-red-500"
        },
        {
          id: 3,
          warna: "bg-yellow-500"
        },
      ]
    },
    {
      id: 2,
      image: "",
      Name: "Cotton Shirt",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$150",
      discount: "$112",
      color: [
        {
          id: 1,
          warna: "bg-blue-200"
        },
        {
          id: 2,
          warna: "bg-red-500"
        },
        {
          id: 3,
          warna: "bg-yellow-500"
        },
      ]
    },
    {
      id: 3,
      image: "",
      Name: "Cotton Shirt",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$150",
      discount: "$112",
      color: [
        {
          id: 1,
          warna: "bg-blue-200"
        },
        {
          id: 2,
          warna: "bg-red-500"
        },
        {
          id: 3,
          warna: "bg-yellow-500"
        },
      ]
    },
  ])

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