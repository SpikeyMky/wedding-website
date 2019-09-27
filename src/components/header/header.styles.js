import styled from 'styled-components';


export const HeaderContainer = styled.header`
    border-bottom:1px solid ${props=>props.theme.secondary2};
    position:sticky;
    top:0;
    background:${props=>props.theme.secondary1};
    text-align:center;
    display:flex;
    align-items:center;
    box-shadow: 0 2px 17px ${props=>props.theme.secondary2};
`;

export const HeaderContent = styled.div`
    flex:1;
    padding:5px 0;
    justify-content:space-around;
    align-items:center;
    display:flex;
`;

export const CladdaghImage = styled.img`
    max-width:100%;
    max-height:75px;
`;
export const ElvinSubText = styled.p`
    font-family:'ElvinBI';
    color:${props=>props.theme.primary2};
    margin:0;
`;
export const BouquetsLeft = styled.img`
    width:115px;
`;
export const BouquetsRight = styled.img`
    width:115px;
    transform:scaleX(-1);
`;
