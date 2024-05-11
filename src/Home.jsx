import { useState } from 'react'
import { Link } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import MobileLayer from './components/MobileLayer'

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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReK3VC2Kz6JtDzv28kdqSUZBLx9EsRfXMPnzIC8Qkptg&s",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReK3VC2Kz6JtDzv28kdqSUZBLx9EsRfXMPnzIC8Qkptg&s",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReK3VC2Kz6JtDzv28kdqSUZBLx9EsRfXMPnzIC8Qkptg&s",
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
        <div className="px-2">
          {/* nav */}
          <div className="flex flex-col py-2 gap-2 ">
            <div className="flex justify-between">
              <i class='ri-menu-2-line'></i>
              <p className='font-bold'>Product Lists</p>
              <i class='ri-filter-line'></i>
            </div>

            <div className="flex items-center gap-4 bg-white min-h-2 p-2 rounded-lg shadow-md border border-black/30">
              <i class='ri-search-line'></i>
              <div className='w-[1px] h-5 bg-black'></div>
              <input className='text-xs w-full h-5 outline-none' type="search" name="search" id="search" placeholder='Search Your Product' />
            </div>
          </div>
          {/* nav */}

          {/* category */}
          <div className="w-full flex flex-col gap-4 text-xs mt-5">
            <div className="flex justify-between items-center">
              <p>Category</p>
              <p>See All</p>
            </div>
            <div className="flex justify-between items-center">
              { category.map((cat, index) => {
                return(
                  <div key={category.id} className='group text-center flex flex-col gap-2' onMouseEnter={() => onMouseEnter(index)} onMouseLeave={onMouseLeave}>
                    <div className='w-[80px] h-[80px] transition-all ease-in-out rounded-xl flex justify-center items-center hover:bg-[#e57573] shadow-md'>
                      <IconContext.Provider value={{color: hoverIndex == index ? "white" : "#E57573", className:"text-3xl"}}>
                        <div>
                          {cat.icon}
                        </div>
                      </IconContext.Provider>
                    </div>
                    <p>{cat.category}</p>
                  </div>
                )
              })}
            </div>
          </div>
          {/* category */}

          {/* PRODUCT LIST */}
          <div className='w-full flex flex-col gap-4 mt-5'>
            {productList.map((products, index) => {
              return(
                <div key={products.id} className='w-full flex items-center border rounded-md gap-5'>
                  <div className='w-[200px] h-[120px] bg-blue-500 rounded-md overflow-hidden'>
                    <img src={products.image} alt="" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Link to="/productdetail">
                      <h1 className='font-bold text-xl'>{products.Name}</h1>
                    </Link>
                    <p className='text-xs'>{products.desc}</p>

                    <div className='flex justify-between'>
                      <div>
                        <p className='line-through font-bold text-sm text-black/30'>{products.price}</p>
                        <p className='text-sm font-bold text-red-400'>{products.discount}</p>
                      </div>
                      
                      <div>
                        <p>Color</p>
                        <div className='flex gap-1'>
                          {products.color.map((kolor, index) => {
                            return(
                              <div key={kolor.id} className='w-[20px] h-[20px] rounded-full' >
                                <div className={`${kolor.warna} w-full h-full rounded-sm`}></div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* PRODUCT LIST */}

          {/* FOOTER */}
          <div className='w-full h-16 border absolute bottom-0 left-0 flex justify-between pt-2 px-2 footer'>
            <div className='flex flex-col items-center'>
              <RiHome2Line />
              <p className='text-xs'>Home</p>
            </div>
            <div className='flex flex-col items-center'>
              <MdOutlineShoppingCart />
              <p className='text-xs'>Cart</p>
            </div>
            <div className='flex flex-col items-center'>
              <FaRegHeart />
              <p className='text-xs'>Favourite</p>
            </div>
            <div className='flex flex-col items-center'>
              <IoMenu />
              <p className='text-xs'>Menu</p>
            </div>
          </div>
          {/* FOOTER */}
        </div>
    </>
  )
}

export default App