import React from "react"
import background from "../assets/landing-bg.jpg";

function SignIU(){
    return(
        <>
        <main className="relative flex flex-row-reverse items-center justify-center w-[100%] h-[100vh] select-none">
            <section className="relative w-[28rem] h-[32rem] rounded-xl border-0 shadow-lg font-sans z-2">
                <img className="absolute w-[100%] h-[100%] rounded-xl shadow-lg" src={background} /> 
                <div className="relative w-[100%] h-[100%] flex flex-col items-center justify-center gap-2">
                <h1 className="font-bold text-[2.3rem]">Welcome Back!</h1>
                <p className="font-semibold text-center">Enter personal details to your account</p>
                <button className="cursor-pointer text-[1.5rem] px-[3rem] py-[0.65rem] font-bold rounded-full bg-white/50 mt-[3rem]">SIGN UP</button>
                </div>
            </section>
            <section className="absolute w-[25rem] h-[30rem] text-[#251201] bg-[#eee2ca] rounded-xl border-0 shadow-lg font-serif flex flex-col items-center justify-center gap-2 z-4">
                <h1 className="font-bold text-[2.3rem]">Welcome Back!</h1>
                <p className="font-semibold text-center">Enter personal details to your account</p>
                <button className="cursor-pointer text-[1.5rem] px-[3rem] py-[0.65rem] font-bold rounded-full bg-white/50 mt-[3rem]">SIGN IN</button>
            </section>
        </main>
        </>
    )
}

export default SignIU;