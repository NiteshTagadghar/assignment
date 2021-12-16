import React, { useState } from "react";
import History from "./history";
const AppointmentBooked =({value, setGoToBooked, history})=>{
    const[showHistory,setShowHistory]=useState(false);
    return(
        <>
        {!showHistory?
            <div
        className="w-100 d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}} >
            <div className="card shadow-lg animate__animated animate__fadeIn col-md-3 m-2" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{value.doctorName}</h5>
                            <p className="card-text">{value.speciality}</p>
                            <p className="card-text"> Charge for the appointment is {value.costPerAppointment}</p>
                            <p className="card-text"> Your appointment is booked</p>
                            <button className="btn btn-lg btn-success"
                             onClick={()=>{
                                 setGoToBooked(false)
                             }}      
                            >GO BACK</button>
                            <button className="btn btn-lg btn-success m-2"
                            onClick={()=>{
                                setShowHistory(true)

                            }}
                            >Appointment history</button>
                        </div>
                    </div>
            

        </div>
    :<History history={history} setShowHistory={setShowHistory}/>    
    }
        </>
    )
}
export default AppointmentBooked;