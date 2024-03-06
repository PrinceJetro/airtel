import React from "react";
import { ReactDOM } from "react";
import "../styles/home.css";
import Home_component from "./home_component";
import Balance from "./balance_component";
import User_information from "./user_information";

import home from "../images/home.png"
import settings from "../images/settings.png"
import airtime from "../images/airtime.png"
import selfcare from "../images/selfcare.png"


export default function Home(){
    return(

        <div className="container-fluid">
        <div className=" main row">

<div className="col-12">
                <hr/>                
                </div>


            <div className="col-sm-3 left_pc">
                <button className="btn ">Balance Checker</button>
                <button className="btn ">SMS</button>
                <button className="btn ">User Informations</button>
            </div>

            <div className="col-sm-3 left_mobile">
                <img src={home}/>
                <img src={settings}/>
                <img src={airtime}/>
                <img src={selfcare}/>
            </div>

                <User_information/>

        </div>

        </div>

        )
}