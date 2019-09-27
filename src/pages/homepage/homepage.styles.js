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
    border: 18px solid ${props=>props.theme.secondary1};
    box-shadow: 8px 8px 20px ${props=>props.theme.secondary2};
`;

export const ContentContainerTop = styled.div`
    flex:1;
`;

export const ContentContainerBottom = styled.div`
`;

export const PageHeading = styled.h1`
    color:${props=>props.theme.secondary1};
    font-size:48px;
    margin:0;
    font-family:HarringtonR;
    letter-spacing:4px;
    @media (max-width: 768px) {
        font-size:34px;
    }
`;

export const PageHeadingElvin = styled.p`
    color:${props=>props.theme.primary1};
    font-family:'ElvinBI';
    font-size:34px;
    margin:0;
    @media (max-width: 768px) {
        font-size:20px;
    }
`;

export const EventDateTime = styled.p`
    color:${props=>props.theme.secondary1};
    font-family:HarringtonR;
    font-size:28px;
    margin:0;
    font-weight:700;
    letter-spacing:2px;
    @media (max-width: 768px) {
        font-size:16px;
    }
`;

export const EventLocation = styled.p`
    color:${props=>props.theme.secondary1};
    font-family:HarringtonR;
    font-size:28px;
    margin:0;
    letter-spacing:2px;
    @media (max-width: 768px) {
        font-size:18px;
    }
`;

export const EventCountdown = styled.p`
    font-family:HarringtonR;
    font-size:34px;
    letter-spacing:2px;
    color:#2f93d7;
    font-weight:700;
    @media (max-width: 768px) {
        font-size:32px;
    }
`;

export const CountdownDays = styled.span`
    color:${props=>props.theme.secondary1};
`;