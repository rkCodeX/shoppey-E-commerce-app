import React from 'react';
import landingBg from "../assets/landing-bg.jpg";

function Deal(){
    return (
        <>
          <section className="relative w-[100%] h-auto">
            {/* background */}
            <img className="absolute w-[100vw] h-" src={landingBg} alt="landing Image"/> 
            {/* content */}
            <div className="relative"></div>
          </section>
        </>
    )
}

export default Deal;