import React from 'react';
import background from "../assets/landing-bg.jpg";

function Deal(){
    return (
        <>
          <section className="relative w-[100%] h-auto">
            {/* background */}
            <img className="absolute w-[100vw] h-[100%]" src={background} alt="Image"/> 
            {/* content */}
            <div className="relative w-[100%] h-auto flex flex-row items-center justify-between text-[#251201]">
                {/* content section */}
                <section className="flex flex-col items-start justify-center gap-4 pl-[6rem] py-[6rem] w-[50%] h-auto select-none font-serif">
                    <h1 className="text-[4.3rem] font-bold">Deal Of The Day</h1>
                    <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                    {/* timer */}
                    <div className="flex flex-row items-start justify-between gap-10 h-auto mt-6">
                        <span className="w-[4.6rem] h-[4.6rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-[1.5rem]">
                            <h1 className="text-[2.3rem] font-bold leading-4">08</h1>
                            <p className="font-semibold leading-0">Hours</p>
                        </span>
                        <span className="w-[4.6rem] h-[4.6rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-[1.5rem]">
                            <h1 className="text-[2.3rem] font-bold leading-6">03</h1>
                            <p className="font-semibold leading-0">Minutes</p>
                        </span>
                        <span className="w-[4.8rem] h-[4.8rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-[1.5rem]">
                            <h1 className="text-[2.3rem] font-bold leading-6">34</h1>
                            <p className="font-semibold leading-0">Seconds</p>
                        </span>
                    </div>
                    <button className="mt-[2rem] hover:transition-all duration-700 ease-in-out cursor-pointer px-6 py-2 bg-[#251201] text-[#eee2ca] font-bold text-[1.2rem] hover:bg-[#eee2ca] hover:text-[#251201]">SHOP NOW</button>
                </section>
                {/* image section */}
                <section className="w-[50%]">
                    {/* img */}
                </section>
            </div>
          </section>
        </>
    )
}

export default Deal;