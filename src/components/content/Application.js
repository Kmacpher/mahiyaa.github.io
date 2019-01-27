import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import ApplicationForm1 from '../../images/applicationPg1.png';
import ApplicationForm2 from '../../images/applicationPg2.png';
import ContractorAgreement from '../../images/contractorAgreement.png';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <h1 className="apply-now">Join Our Team</h1>
        <h4 className="apply-info">Download and complete the application below to apply.</h4>
        <div>
          <img id="guard" src= {ApplicationForm1}/>
          <img id="guard" src= {ApplicationForm2}/>
        </div>
        <h1 className="booking">Independent Contractor Agreement</h1>
        <h4 className="apply-info">Download and sign the agreement below.</h4>
        <img id="guard" src= {ContractorAgreement}/>
        <header className="Application-header">
          <body>
              <form>
                <input type = "file" name = "fileupload" accept = "image/*" />
              </form>
          </body>
        </header>
      </div>
    );
  }
}

export default Application;