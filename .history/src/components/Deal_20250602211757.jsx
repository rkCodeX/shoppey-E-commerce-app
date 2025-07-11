import React from 'react';
import background from "../assets/landing-bg.jpg";

function Deal(){
    return (
        <>
          <section className="relative w-[100%] h-auto">
            {/* background */}
            <img className="absolute w-[100vw] h-auto" src={background} alt="Image"/> 
            {/* content */}
            <div className="relative w-[100%"></div>
          </section>
        </>
    )
}

export default Deal;