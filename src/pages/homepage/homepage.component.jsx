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
        const weddingDay = new Date(2020, 3, 11);
        const one_day = 1000*60*60*24;

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