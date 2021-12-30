import React from "react";
const History=({history,setShowHistory})=>{
    return(
        <div className="row">
             <div className="d-flex justify-content-between p-4"><h3>History of booked appointments</h3>
             <button 
             className="btn btn-info btn-sm"
             onClick={()=>{
                setShowHistory(false)
                }}>pre-page</button></div>
       { history.map((value,index)=>{
            return(
                <div key={index} className="col-md-4">
                <div className="card shadow-lg  m-2" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{value.doctorName}</h5>
                                <p className="card-text">{value.speciality}</p>
                                <p className="card-text"> Charge for the appointment is {value.costPerAppointment} </p>
                                <p className="card-text"> Appointment was booked for 20 mins</p>
                               
            
                </div>
                </div>
                            </div>
            )
        })}
     </div>  
    )
}
export default History;