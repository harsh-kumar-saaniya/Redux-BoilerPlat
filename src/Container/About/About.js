import React from 'react';
import { Link } from 'react-router-dom';


class About extends React.Component {
    render() {
        return (
            <div>
                <h1>This is About page</h1>
                <Link to="/">GO TO HOME</Link>

            </div>
        )
    }
}



export default About;