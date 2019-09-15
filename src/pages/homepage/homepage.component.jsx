import React from 'react';
import {Link} from 'react-router-dom';



import {PageHeading} from './homepage.styles';

// import Directory from "../../components/directory/directory.component";

const HomePage = () => (
    <div className="homepage">        
        <PageHeading>Jemma and Mike</PageHeading>
        <p>We're tying the knot on 11th April 2020.</p>
        <Link to="/test">Test page</Link>
    </div>
)

export default HomePage;