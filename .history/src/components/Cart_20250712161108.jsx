import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import img3 from "../assets/seller3.png";

function Cart(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between gap-[1rem]">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                </section>
                <section className="flex flex-col items-center justify-center w-[100%] p-10 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                    <h1 className="font-bold text-2xl">Shopping Cart</h1>
                </section>
                <section className="w-[100%] h-auto flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-between py-6 border-b-2 border-gray-400">
                        <div className="flex flex-row items-center justify-start">
                            <img src={img1}/>
                        </div>
                        <div className="flex flex-row items-center justify-evenly"></div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Cart;