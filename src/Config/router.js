import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import About from '../Container/About/About';
import Home from '../Container/home/Home';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Router>
        )
    }
}

export default AppRouter;