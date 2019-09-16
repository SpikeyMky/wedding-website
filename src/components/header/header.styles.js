import styled from 'styled-components';


export const HeaderContainer = styled.header`
    border-bottom:1px solid #000;
    position:sticky;
    top:0;
    background:#fff;
    text-align:center;
    display:flex;
    align-items:center;
    box-shadow: 0 2px 17px #000;
`;

export const HeaderContent = styled.div`
    flex:1;
    padding:5px 0;
`;

export const CladdaghImage = styled.img`
    max-width:100%;
    max-height:75px;
`;
export const ElvinSubText = styled.p`
    font-family:'ElvinBI';
    color:#008000;
    margin:0;
`;
export const BouquetsLeft = styled.img`
    width:115px;
`;
export const BouquetsRight = styled.img`
    width:115px;
    transform:scaleX(-1);
`;
