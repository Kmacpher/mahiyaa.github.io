import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Booking from './components/content/Booking';
import Application from './components/content/Application';
import Homepage from './components/content/Homepage';

const Routes = (props) => {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container-fluid">
                    <Switch>
                        <Route path="/booking" component={Booking} />
                        <Route path="/apply-now" component={Application} />
                        <Route path="/" component={Homepage} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default Routes;