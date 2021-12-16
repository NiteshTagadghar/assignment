import React from "react";
const Welcome =({setWelcome})=>{
    return(
        <div
        
        className=" main w-100 d-flex flex-column align-items-center justify-content-center " style={{height: "100vh"}} >
            <h1 className="animate__animated animate__backInLeft">Welcome to book your appointment</h1>
            <button className="btn btn-lg btn-success animate__animated animate__backInRight"
            onClick={() => setWelcome(false)}
            >BOOK NOW</button>

        </div>
    )
}
export default Welcome;