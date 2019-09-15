import React from 'react';
import {Link} from 'react-router-dom';

import {} from './homepage.styles';

// import Directory from "../../components/directory/directory.component";

const HomePage = () => (
    <div className="homepage">
        <p>Wedding website</p>
        <Link to="/test">Test</Link>
    </div>
)

export default HomePage;