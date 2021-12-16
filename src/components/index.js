import React, { useState } from "react";
import AppointmentBooked from "./appointmentBooked";

const ClinicComponent = ({setWelcome})=>{
    const clinics =[
    {   key:1,
        doctorName:"Doctor 1",
        speciality:"Heart specialist",
        availability:"40 mins",
        costPerAppointment:900
        
    },
    {   key:2,
        doctorName:"Doctor 2",
        speciality:"Eye specialist",
        availability:"40 mins",
        costPerAppointment:500
    },
    {   key:3,
        doctorName:"Doctor 3",
        speciality:"Immunologists",
        availability:"40 mins",
        costPerAppointment:400
    },
    {   key:4,
        doctorName:"Doctor 4",
        speciality:"Anesthesiologists",
        availability:"40 mins",
        costPerAppointment:600
    },
    {   key:5,
        doctorName:"Doctor 5",
        speciality:"Dermatologists",
        availability:"40 mins",
        costPerAppointment:250
    }
    ]
    const [goToBooked, setGoToBooked]=useState(false)
    const [valueOfBooked, setValueOfBooked]=useState()
    const [history,setHistory]=useState([])
    
    return (
        <>
       {!goToBooked?   <div className="row">
            <div>
            <div className="d-flex justify-content-between p-4"><h3>Book your appointments</h3>
             <button 
             className="btn btn-info btn-sm animate__animated animate__tada"
             onClick={()=>{
                setWelcome(true)
                }}>GO BACK</button></div>
            </div>

            {clinics.map( (value,index)=>{
                    return (
                        <div key={index} className="col-md-4 animate__animated animate__slideInUp">
                            <div className="card shadow-lg border m-2" style={{width: "18rem"}}>
                        <div className="card-body ">
                            <h5 className="card-title">{value.doctorName}</h5>
                            <p className="card-text">{value.speciality}</p>
                            <p className="card-text"> Charge for the appointment is {value.costPerAppointment}</p>
                            <p className="card-text"> Doctor available for {value.availability}</p>
                            <a href="#" className="btn btn-primary" onClick={()=>{
                                const filteredBookingHistory=history.filter(historyValue=>{
                                   return historyValue.key===value.key
                                })
                                if(filteredBookingHistory.length === 2){

                                        alert("Appointments are booked")
                                }else{

                                    setGoToBooked(true);
                                    setValueOfBooked(value)
                                    setHistory([...history,value])
                                }
                            }}>Book Appointment</a>
                        </div>
                    </div>
                        </div>
                        
                    )
            })
             }
        </div>
    :<AppointmentBooked value={valueOfBooked} setGoToBooked={setGoToBooked} history={history}/>
    }
    </>
    )
} 
export default ClinicComponent;