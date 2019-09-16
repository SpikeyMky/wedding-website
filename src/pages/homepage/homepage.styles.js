import styled from 'styled-components';
import RingLakeDog from '../../assets/ring-lake-dog.jpg';


export const HomepageContainer = styled.div`
    padding:30px 0;
`;

export const ContentContainer = styled.div`
    background:url(${RingLakeDog});
    background-size:cover;
    background-position-x:50%;
    min-height:608px;
    padding:30px 0;
    margin:30px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border: 18px solid #fff;
    box-shadow: 8px 8px 20px #000;
`;

export const ContentContainerTop = styled.div`
    flex:1;
`;

export const ContentContainerBottom = styled.div`
`;

export const PageHeading = styled.h1`
    color:#fff;
    font-size:48px;
    margin:0;
    font-family:HarringtonR;
    letter-spacing:4px;
`;

export const PageHeadingElvin = styled.p`
    color:#2f93d7;
    font-family:'ElvinBI';
    font-size:34px;
    margin:0;
`;

export const EventDateTime = styled.p`
    color:#fff;
    font-family:HarringtonR;
    font-size:28px;
    margin:0;
    font-weight:700;
    letter-spacing:2px;
`;

export const EventLocation = styled.p`
    color:#fff;
    font-family:HarringtonR;
    font-size:28px;
    margin:0;
    letter-spacing:2px;
`;

export const EventCountdown = styled.p`
    font-family:HarringtonR;
    font-size:34px;
    letter-spacing:2px;
    color:#2f93d7;
    font-weight:700;
`;

export const CountdownDays = styled.span`
    color:#fff;
`;