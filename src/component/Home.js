import React from 'react'
import "../css/Home.css"
import Form from './Form'
import Card from './Card'
export default function Home() {
    return (
        <>
            {/* Home */}
            <section id="Home">
                <div className="Home_div1">
                    <div className="Home_div2">
                        <h1 className="Home_h1">
                            {" "}
                            welcome to {" "}
                            <span id="Name" style={{ color: "white" }}>
                                Abughaush Solutions 
                            </span>
                        </h1>
                        <h1 className="Home_h1" id="Full">
                            for daily tasks
                        </h1>
                        
                        <div id='form'>
                            <Form />
                        </div>

                        <div className='cardhome'>
                        <Card/>
                        </div>
                    </div>
                </div>
                {/* HOME */}
            </section>



        </>
    )
}
