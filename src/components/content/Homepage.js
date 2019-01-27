import React, { Component } from 'react';
import security from '../../images/security.jpg';
import guard1 from '../../images/guard1.jpg';
import guard2 from '../../images/guard2.png';
import certified from '../../images/certified.png';


class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="motto-div">
          <h1 className="motto">PROTECT, ALERT, AND PRESERVE</h1>
        </div>
        <div className="guard-img">
          <img id="guard" src= {security}/>
        </div>
        <div>
          <h3 className="header">WE WILL KEEP DILIGENT FIRE WATCH,
          PROTECT YOUR ASSETS, FOLLOW PROPER
          PROCEDURES, AND GUARD THE SAFETY OF
          YOUR PROPERTY.</h3>
        </div>
        <div className="row about-section">
          <div className="about">
            <img className="about-img" src= {guard2}/>
            <p className="about-subheader">Certified Fire Watch Professionals</p>
            <p>Fire watch Guards have thorough and extensive training and have the knowledge
            needed for fire prevention, activate fire alarms, knowledge of use of various types of fire
            extinguishers, are familiar with the functions of a sprinkler system, know how to
            evacuate a building if necessary and will follow proper procedures to alert the local fire
            department.</p>
          </div>
          <div className="about">
            <img className="about-img" src= {guard1}/>
            <p className="about-subheader">Service Specialties </p>
            <p>Fireguards play a huge role in maintaining the safety of large buildings, whether for
            commercial or residential use. High-rise office building fireguard services involve
            providing watch duties at any time when a fire alarm, standpipe, or sprinkler is out of
            operation. Building management and business owners rely upon the expertise and
            professionalism of fireguards to maintain productive and efficient operations on a day-
            to-day basis in compliance with the law.</p>
          </div>
          <div className="about">
            <img className="about-img" src= {certified}/>
            <p className="about-subheader">About Us</p>
            <p>Our NYC Certified Fire Watch Guards will provide protocol that satisfies all FDNY
            safety regulations. We will patrol, inspect safety equipment, and fill out weekly logs as
            the FDNY requires. Although fireguards do not possess the skills that a firefighter does,
            they do receive the proper training that is required to responsibly protect your property.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Homepage;