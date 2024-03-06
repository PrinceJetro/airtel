import React from "react";
import { ReactDOM } from "react";
import "../styles/balance.css"

export default function Balance(){
    return(
        <div  className="col-sm-9 balance_div  mb-3">

            <div className="balance row">

            <div className="col-12 balance_name">
                <h6>Balance Checker</h6>
            </div>

            <div className="col-sm-12 actions">
                <button className="btn ">Data Balance Checker</button>
                <button className="btn ">Airtime Balance Checker</button>
                <button className="btn ">Buy Data & Airtime</button>
                <button className="btn ">My Mobile Number</button>
            </div>

            <div className="feedbacks">

            </div>
            <button className="btn cancel_btn">Cancel</button>

            <div className="name">
                <p className="m-0">Input USSD code</p>
                <input type="text"/>
                <button className="btn ussd_btn">Send</button>
            </div>
            
            <div className="name  mb-3">
            <p className="m-0">Please input recharge PIN</p>
                <input type="text"/>
                <button className="btn recharge_btn">Send</button>
            </div>

            </div>

        </div>
    )
}