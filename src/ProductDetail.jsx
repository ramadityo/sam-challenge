import { useState} from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import { IoArrowBackSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

function ProductDetail(){
    const [count, setCount] = useState(0);

    return (
        <>
                <div className="px-2 flex flex-col gap-2">
                    {/* nav */}
                    <div className="flex flex-col py-2 gap-2 ">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <IoArrowBackSharp />
                            </Link>
                            <p className='font-bold'>Product Details</p>
                            <div className='w-[10px] h-[10px]'></div>
                        </div>
                    </div>
                    {/* nav */}

                    {/* TITLE PRODUCT */}
                    <div>
                        <h1 className='text-2xl font-bold'>Cotton Shirt</h1>
                        <p className='text-sm text-black/50'>This is 100% cotton shirt</p>
                    </div>
                    {/* TITLE PRODUCT */}

                    <div className='w-full min-h-2 py-2'>
                        <div className='relative w-[300px] h-[30vh] m-auto rounded-xl overflow-hidden'>
                            <div className='absolute w-[50px] h-[50px] bg-white rounded-full right-[10px] top-[10px] flex items-center justify-center'>
                            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
                                <div className='text-xl'>
                                    <FaHeart />
                                </div>
                            </IconContext.Provider>
                            </div>
                            <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReK3VC2Kz6JtDzv28kdqSUZBLx9EsRfXMPnzIC8Qkptg&s" alt="" />
                        </div>
                    </div>

                    {/* PRICE */}
                    <div className="flex justify-between">
                        <div className='flex gap-2 items-end'>
                            <p className='text-2xl font-bold text-red-400'>$112</p>
                            <p className='text-sm font-bold text-black/30'>$150</p>
                        </div>
                        <div className='flex items-end'>
                            <p>5 in a stock</p>
                        </div>
                    </div>
                    {/* PRICE */}

                    {/* DESCRIPTION */}
                    <p className='font-medium text-sm text-black/50 mt-5'>Description</p>
                    <p className='font-medium text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    {/* DESCRIPTION */}

                    {/* FOOTER */}
                    <div className="w-full absolute bottom-0 left-0 px-2 pb-10 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className='text-black/50'>Choose Colors</p>
                                <p>Light Sky</p>
                            </div>

                            <div className="flex gap-2">
                                <div className='w-[30px] h-[30px] rounded-md bg-blue-300'></div>
                                <div className='w-[30px] h-[30px] rounded-md bg-red-500'></div>
                                <div className='w-[30px] h-[30px] rounded-md bg-yellow-500'></div>
                            </div>
                        </div>
                        <div className='w-full flex justify-between gap-4 h-10'>
                            <button className='flex-1 border-2 border-red-400 uppercase rounded-md'>add to card</button>
                            <button className='flex-1 bg-red-400 uppercase text-white rounded-md'>buy now</button>
                        </div>
                    </div>
                    {/* FOOTER */}

                </div>
        </>
    )

}

export default ProductDetail