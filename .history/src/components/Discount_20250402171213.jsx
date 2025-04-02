import React from 'react'

function Discount(){
    return(
        <>
        <div className="w-[100%] h-auto p-[5rem] flex flex-row items-center justify-evenly">
            <section className='w-[25%] h-auto bg-gray-300 p-[1rem] '>
                <h1 className="font-bold text-2xl">40% OFF</h1>
                <p>MENS COLLECTION</p>
                <button>Go To Collection</button>
            </section>
            <section className='w-[25%] h-auto bg-yellow-300 p-[1rem] '>
                <h1 className="font-bold text-2xl">40% OFF</h1>
                <p>Mens Collection</p>
                <button>Go To Collection</button>
            </section>
            <section className='w-[25%] h-auto bg-pink-500 p-[1rem] '>
                <h1 className="font-bold text-2xl">40% OFF</h1>
                <p>Mens Collection</p>
                <button>Go To Collection</button>
            </section>
        </div>
        </>
    );
}

export default Discount;