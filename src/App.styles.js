import styled, {createGlobalStyle} from 'styled-components';

// import heartknot from './assets/heart-knot.png';
import flowerborderright from './assets/flower-border-right.png'
import flowerborderleft from './assets/flower-border-left.png'
import parchment from './assets/parchment.jpg'
import elvin from './assets/fonts/TNGANBI.TTF';
import harringtonR from './assets/fonts/HarringtonR.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family:'ElvinBI';
        src:url(${elvin}) format('truetype');
    }
    @font-face{
        font-family:'HarringtonR';
        src:url(${harringtonR}) format('truetype');
    }
    a{
        text-decoration:none;
        color:${props=>props.theme.secondary2};
    }
`;


// import {ReactComponent as CelticKnot} from "./assets/celtic-knot.svg"

export const PageContainer = styled.div`
    background: url(${flowerborderleft}) 0 0 no-repeat, url(${flowerborderright}) 100% 0 no-repeat, url(${parchment});
    background-repeat-y:repeat;

    @media (max-width: 768px) {
        background: url(${parchment});
    }

`;

export const InnerWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    min-height: calc(100vh - 127px);
    text-align: center;
    padding: 0 115px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;