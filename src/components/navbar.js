import React from "react";
import { ReactDOM } from "react";
import "../styles/navbar.css"

import airtel from "../images/airtel.png"
import home from "../images/home.png"
import settings from "../images/settings.png"
import airtime from "../images/airtime.png"
import selfcare from "../images/selfcare.png"




export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light m-0">
  <a class="navbar-brand" href="#"><img src={airtel}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="https:princejetro.vercel.app"><img src={home} /> <span class="sr-only">(current)</span></a>
         <p className="text-center text-danger" >Home</p>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#"><img src={settings}/></a>
        <p className="text-center text-danger" >Settings</p>
      </li>

      <li class="nav-item">
        <a class="nav-link " href="#"><img src={airtime} /></a>
        <p className="text-center text-danger" >Buy Airtime & Data</p>
      </li>
      
      <li class="nav-item">
        <a class="nav-link " href="#"><img src={selfcare} /></a>
        <p className="text-center text-danger" >Airtel Self Care</p>
      </li>
    </ul>

  </div>
</nav>
    )
} 