import React from 'react';
import { FaSliders } from "react-icons/fa6";
import demo from "../assets/seller13.png";

function Product(){
    return(
        <>
         <div className="w-[100%] h-auto p-[4rem] flex flex-col items-center justify-center font-serif select-none">
            <h1 className="font-bold text-[clamp(2rem,5vw,5rem)]">Our Product</h1>
            {/* categories button section */}
            <section className="flex flex-row items-center justify-c">
                <button>NEW</button>
                <button>WOMEN</button>
                <button>MEN</button>
                <button>Trends</button>
                <button><FaSliders /> Filter</button>
            </section>
            {/* Product section */}
            <section>
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
            </section>
         </div>
        </>
    )
}

export default Product;