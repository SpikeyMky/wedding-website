import React from 'react';
import { Link } from 'react-router-dom';

import {createSongRequestDocument} from '../../firebase/firebase.utils';



import { HomepageContainer, ContentContainer, ContentContainerTop, ContentContainerBottom, PageHeading, PageHeadingElvin, EventDateTime, EventLocation, EventCountdown, CountdownDays } from './homepage.styles';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            daysUntilWedding:this.getDaysUntilWedding() 
        }
    }

    getDaysUntilWedding = () => {
        const today = new Date();
        const weddingDay = new Date(2020, 3, 11, 12, 0, 0);
        console.log(weddingDay);
        const one_day = 1000*60*60*24;

        // // get total seconds between the times
        // var delta = Math.abs(weddingDay - today) / 1000;
        // // calculate (and subtract) whole days
        // var days = Math.floor(delta / 86400);
        // delta -= days * 86400;
        // // calculate (and subtract) whole hours
        // var hours = Math.floor(delta / 3600) % 24;
        // delta -= hours * 3600;
        // // calculate (and subtract) whole minutes
        // var minutes = Math.floor(delta / 60) % 60;
        // delta -= minutes * 60;
        // // what's left is seconds
        // var seconds = delta % 60;  // in theory the modulus is not required
        // console.log(days, hours, minutes, seconds);

        return(
            Math.ceil((weddingDay.getTime()-today.getTime())/(one_day))
        );
    }

    testFunc = () => {
        createSongRequestDocument({artist:"Fall out boy",title:"Dance dance"});
    }

    render() {
        const {daysUntilWedding} = this.state;
        return (

            <HomepageContainer>

                <ContentContainer>
                    <ContentContainerTop>
                        <PageHeading>Jemma Martin & Michael Pallister</PageHeading>
                        <PageHeadingElvin>Jemma Martin & Michael Pallister</PageHeadingElvin>
                    </ContentContainerTop>

                    <ContentContainerBottom>
                        <EventDateTime>12:00pm Saturday 11th April 2020</EventDateTime>
                        <EventLocation>Pott Shirgley, Macclesfield</EventLocation>
                        <EventCountdown><span>Tying the knot in </span> <CountdownDays>{daysUntilWedding}</CountdownDays> <span>days!</span></EventCountdown>
                    </ContentContainerBottom>

                </ContentContainer>

                {/* <div onClick={() => {this.testFunc()}}>Click me</div> */}

            </HomepageContainer>
        );
    }
}

    export default HomePage;