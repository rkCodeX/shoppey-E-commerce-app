import React from 'react'
import New from "../assets/discountNew.png";

function newCollection(){
    return(
        <>
            <section className="w-[0%] h-auto flex flex-row pb-[5rem]">
                <img className="w-[30rem] " src={New} alt="" />
                <div>
                    <h1></h1>
                    <p></p>
                    <section>
                        <div>
                            <h1></h1>
                            <p></p>
                        </div>
                        <div>
                            <h1></h1>
                            <p></p>
                        </div>
                        <div>
                            <h1></h1>
                            <p></p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default newCollection;