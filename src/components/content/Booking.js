import React, { Component } from 'react';

class Booking extends Component {
  render() {
    return (
      <div className="Booking">
        <h1 className="booking">Fireguard Schedule Request Form</h1>
        <div>
          <form action="mailto:mrnysolutions@gmail.com" method="post" enctype="text/plain">
            <ul class="form-style-1">
              <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
              <li>
                <label>Email <span class="required">*</span></label>
                <input type="email" name="field3" class="field-long" placeholder="Email Address" />
              </li>
              <li>
                <label>Your Message <span class="required">*</span></label>
                <textarea name="field4" id="field5" class="field-long field-textarea" 
                placeholder="Please provide dates, times, address, number of guards, and type of certification (ex. F-01) required for your fireguard need.">
                </textarea>
                </li>
                <li>
                    <input type="submit" value="Submit" />
                </li>
            </ul>
          </form>
        </div>
        <div>
          <h3 className="header2">WE WILL KEEP DILIGENT FIRE WATCH,
          PROTECT YOUR ASSETS, FOLLOW PROPER
          PROCEDURES, AND GUARD THE SAFETY OF
          YOUR PROPERTY.</h3>
        </div>
      </div>
    );
  }
}

export default Booking;