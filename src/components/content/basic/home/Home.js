import React from 'react';
import './Home.css';
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css';

export const Home = ()=>{
    return(
        <div className="home">
            <div className="home-info">
              <h3>Hello I'am</h3>
              <h1>ANUJ KUMAR PAL</h1>
              <h4>FULL STACK DEVELOPER</h4>
            </div>
            <div className="home-para">
                <p>A professional full stack developer from New Delhi,India. I create creative designs and creative solutions.</p>
            </div>
            <div className="home-num">
                <i class="fa fa-phone"></i>
                <p>+9582373784</p>
            </div>
            <div className="home-num">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                <p>anujkmr974@gmail.com</p>
            </div>
        </div>
    )
}