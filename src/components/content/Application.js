import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import ApplicationForm1 from '../../images/applicationPg1.png';
import ApplicationForm2 from '../../images/applicationPg2.png';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <h1 className="apply-now">Join Our Team</h1>
        <div><h4 className="apply-info">Download and complete the application below to apply. Email the completed application</h4>
        <a href="mailto:mrnystaffing@gmail.com" className="apply-info-email">here.</a></div>
        <div>
          <img id="guard" src= {ApplicationForm1}/>
          <img id="guard" src= {ApplicationForm2}/>
        </div>
        <h6 className="apply-info">Having issues with the PDF? Email us your resume at: mrnystaffing@gmail.com</h6>
      </div>
    );
  }
}

export default Application;