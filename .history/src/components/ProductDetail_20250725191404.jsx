import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";


function ProductDetail(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-center gap-[2rem]">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-6 text-xl">
                    <Link to="/Save">
                        <FaRegHeart className="cursor-pointer hover:text-gray-500" />
                    </Link>
                    <Link to="/Cart">
                        <FaCartShopping className="cursor-pointer hover:text-gray-500" />
                    </Link>
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                    </div>
                 </section>
                 <section className="grid grid-cols-2 max-[600px]:grid-cols-1 select-none items-center justify-center max-[600px]:w-[60%] max-[500px]:w-[70%] max-[400px]:w-[90%] w-[60%] max-[1140px]:w-[70%] max-[970px]:w-[80%] max-[800px]:w-[90%] h-auto border-2 border-gray-300 rounded-lg gap-[1rem] bg-[#f7ecd6]">
                    <div className="cols-span-1 h-auto flex items-center justify-center">
                        <img className='w-full h-full rounded-lg' src={img3} />
                    </div>
                    <div className="cols-span-1 h-auto flex flex-col items-start justify-start p-6">
                        <p className="text-sm">New collection</p>
                        <h1 className="text-[1.3rem] font-bold">Textured T-shirt</h1>
                        <p className="mt-4 mb-4">$450.98</p>
                        <p className="text-sm mb-4">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                        <div className="flex flex-row item-center justify-center gap-[1rem] border-y-2 border-white p-2 mb-6 leading-4">
                           <FiMinus className="cursor-pointer hover:text-gray-700"/>
                            <h1 className="text-[1.5rem]">1</h1>
                            <FaPlus className="cursor-pointer hover:text-gray-700"/>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem] mb-6">
                            <button className="w-[2.5rem] h-[2.5rem] hover:bg-gray-500 hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:text-white rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer">XS</button>
                            <button className="w-[2.5rem] h-[2.5rem] hover:bg-gray-500 hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:text-white rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer">S</button>
                            <button className="w-[2.5rem] h-[2.5rem] hover:bg-gray-500 hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:text-white rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer">M</button>
                            <button className="w-[2.5rem] h-[2.5rem] hover:bg-gray-500 hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:text-white rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer">L</button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[2rem]">
                        <button className="px-[2rem] py-[10px] rounded-md text-nowrap shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white cursor-pointer">Add to cart</button>
                        <button className="p-[10px] rounded-md shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white cursor-pointer font-light text-[1.5rem]"><FaRegBookmark /></button>
                        </div>
                    </div>
                 </section>
                 <section className="columns-5 w-[100%] p-4 h-auto mt-4 max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img7} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img1} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img2} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img3} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img4} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img5} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img6} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img8} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img9} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img3} />
                              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img4} />
                 </section>
            </div>
        </>
    )
}

export default ProductDetail;