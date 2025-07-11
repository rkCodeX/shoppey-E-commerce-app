import React from 'react';
import { FaSliders } from "react-icons/fa6";
import demo from "../assets/seller13.png";

function Product(){
    return(
        <>
         <div className="w-[100%] h-auto">
            <h1>Our Product</h1>
            {/* categories button section */}
            <section>
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

            </section>
         </div>
        </>
    )
}

export default Product;