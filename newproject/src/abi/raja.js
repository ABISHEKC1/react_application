import React from "react"
import '../abi/raja.css'
function Abi(){
    return(
        <>
        <center><h1> APPLICATION FORM </h1></center>
        <label> Student Name </label>
        <input type="text" placeholder="Enter Your Name" className="name1"/><br/><br/>
        <label>Student Id </label>
        <input type="number"placeholder="Enter Your Id" className="name2"/><br/><br/>
        <label>Phone Number </label>
        <input type="number" placeholder="Enter Your Phone Number" className="name3"/><br/><br/>
        <label>Father Name </label>
        <input type="text" placeholder="Enter Your Father Name" className="name4"/><br/><br/>
        <label>Mother Name </label>
        <input type="text"placeholder="Enter Your Mother Name" className="name5"/><br/><br/>
        <label>E-Mail </label>
        <input type="email" placeholder="Enter Your Email" className="name6"/>
        </>
    )
}
export default Abi;