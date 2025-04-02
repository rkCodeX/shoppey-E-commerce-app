import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

import landingBg from "../assets/landing-bg.jpg";

function Discount(){
    return(
        <>
        <div className="w-[100%] h-auto p-[5rem] flex flex-row items-center justify-evenly">
            <section className='w-[25%] h-auto bg-gray-300 p-[1rem]'>
                <img src={landingBg} alt="" />  
                <div className='pt-[0.65rem]'>
                <h1 className="font-bold text-2xl">40% OFF</h1>
                <p className='font-semibold'>MEN COLLECTION</p>
                <button className='group font-semibold hbg-gray-200 rounded-md px-[0.65rem] py-[0.3rem] cursor-pointer'>Go To Collection <FaArrowRightLong className='inline group-hover:translate-x-2'/></button>
                </div>
            </section>
            <section className='w-[25%] h-auto bg-pink-500 p-[1rem] '>
                <div className="pb-[0.65rem]">
                <h1 className="font-bold text-2xl">60% OFF</h1>
                <p className='font-semibold'>WOMEN COLLECTION</p>
                <button className='font-semibold'>Go To Collection <FaArrowRightLong /></button>
                </div>
                <img src={landingBg} alt="" />
            </section>
            <section className='w-[25%] h-auto bg-yellow-300 p-[1rem] '>
                <img src={landingBg} alt="" />
                <div className="pt-[0.65rem]">
                <h1 className="font-bold text-2xl">30% OFF</h1>
                <p className='font-semibold'>NEW COLLECTION</p>
                <button className='font-semibold'>Go To Collection <FaArrowRightLong /></button>
                </div>
            </section>
        </div>
        </>
    );
}

export default Discount;