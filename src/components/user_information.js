import React from "react";
import { ReactDOM } from "react";
import "../styles/user_information.css"

export default function User_information(){
    return(
        <div  className="col-sm-9 user_information_div  mb-3">

            <div className="user_information row">

            <div className="col-12 user_information_name">
                <h6>User Information</h6>
            </div>

            <div>
            <p>Portal Login Information</p>
            <p>Username</p>
            <input type="text" value={"admin"}/>

            <div className="name">
                <p>Password</p>
            <input type="text"/>
                <button className="btn recharge_btn">Send</button>
            </div>

            <hr/>                

            <p>MiFi Login Information</p>
            <p>Network Name (SSID)</p>



            </div>


            </div>

        </div>
    )
}