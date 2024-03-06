import React from "react";
import { ReactDOM } from "react";
import "../styles/home_component.css"

export default function Home_component(){
    return(
        <div className="col-sm-9 home_div">

        <div className="home ">  



<div className="col-12 home_name">
                <h6>Home</h6>
            </div>

        <div className="row p-4 text-center">

{/* The toggle switch and connected div */}
            <div className="col-3">
            <label class="switch">
                <input type="checkbox"/>
              <span class="slider round"></span>
        </label>
            </div>
            
            <div className="col-9 ddd">
                <h4 className="text-center">BeSafe Airtel</h4>
                <h5 className="text-center">Connected</h5>
            </div>
        </div>
{/* end of The toggle switch and connected div */}

        <div className="row text-center">
            <div className="col-6 text-center asa">
                <i className="fa fa-clock-o text-light text-center"></i>
                <span className="text-light text-center ">0 Days 9:0:22</span>
            </div>
            <div className="col-6 asa">
            <i className="fa fa-arrow-up text-light"></i>
            <i className="fa fa-arrow-down text-light"></i>
            <div>
                <p>Some</p>
                <p>Some</p>
            </div>

            </div>

        </div>


        <div className="row connection_details">
            <div className="col-6">
                <i className="fa fa-signal"></i>
            </div>
            <div className="col-6">
                <h1 className="network_speed">4G</h1>
            </div>                
            <div className="col-12">
            <hr/>                
            </div>
            <div className="col-6">
            <i class="fa fa-battery-full"></i>
            </div>
            <div className="col-6">
                <h1 className="battery_percent">80%</h1>
            </div>
            <div className="col-12">
            <hr/>                
            </div>
            <div className="col-6">
            <i class="fa fa-user"></i>
            </div>
            <div className="col-6">
            <button className="btn ">5</button>
            </div>

        </div>
   
    </div>

        </div>
    )
}