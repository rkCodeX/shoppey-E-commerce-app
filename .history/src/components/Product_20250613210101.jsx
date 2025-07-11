import React from 'react';
import { BsFilterRight } from "react-icons/bs";

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
                <button><BsFilterRight /> Filter</button>
            </section>
         </div>
        </>
    )
}

export default Product;