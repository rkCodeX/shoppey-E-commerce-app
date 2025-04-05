import React from "react";
import demo from "../assets/newCollection.png";


function BestSeller(){
    return (
        <>
           <section className="flex flex-row items-center justify-center gap-[1rem] w-[100%] h-auto py-[4rem] bg-[#251201]">
                <article className="container flex flex-col items-start justify-start gap-[1rem] pl-[3rem] w-[35%] text-white">
                    <h1 className="text-5xl select-none">Best Seller <br/> Product</h1>
                    <p className="select-none text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque iusto porro rem consequuntur, ab minima iste nemo quidem temporibus iure excepturi ipsam perferendis sequi.</p>
                    <button className="bg-[#8f5e36]">SEE MORE</button>
                </article>
                <section className="flex flex-col items-center justify-center gap-[2rem] w-[65%]">
                  <div className="flex flex-row items-center justify-center w-[100%] gap-[2rem]">
                  <div className="w-auto h-auto bg-white leading-4">
                    <img  className="w-[16rem] h-[16rem]" src={demo} alt="" />
                    <div className="p-[1rem]">
                        <span>*****</span>
                        <h1>Name</h1>
                        <p>Price $50</p>
                    </div>
                  </div>
                  <div className="w-auto h-auto bg-white leading-4">
                    <img  className="w-[16rem] h-[16rem]" src={demo} alt="" />
                    <div className="p-[1rem]">
                        <span>*****</span>
                        <h1>Name</h1>
                        <p>Price $50</p>
                    </div>
                  </div>
                  <div className="w-auto h-auto bg-white leading-4">
                    <img  className="w-[16rem] h-[16rem]" src={demo} alt="" />
                    <div className="p-[1rem]">
                        <span>*****</span>
                        <h1>Name</h1>
                        <p>Price $50</p>
                    </div>
                  </div>
                  </div> 
                  <div>
                    <button>*</button>
                    <button>*</button>
                    <button>*</button>
                    <button>*</button>
                  </div>
                </section>
           </section>
        </>
    )
}

export default BestSeller;