import styled from 'styled-components';


// import heartknot from './assets/heart-knot.png';
import flowerborderright from './assets/flower-border-right.png'
import flowerborderleft from './assets/flower-border-left.png'
import parchment from './assets/parchment.jpg'

// import {ReactComponent as CelticKnot} from "./assets/celtic-knot.svg"

export const PageContainer = styled.div`
    background: url(${flowerborderleft}) 0 0 no-repeat, url(${flowerborderright}) 100% 0 no-repeat, url(${parchment});
    background-repeat-y:repeat;
`;

export const InnerWrapper = styled.div`
    max-width:1400px;
    margin:0 auto;
    border-left:1px solid #000;
    border-right:1px solid #000;
    min-height:100vh;
    text-align:center;
    padding: 0 115px;
`;