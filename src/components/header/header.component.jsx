import React from 'react';
import claddagh from '../../assets/jm-claddagh.png';
import bouquets from '../../assets/bouquets.png';

import {HeaderContainer, BouquetsLeft, BouquetsRight, HeaderContent, CladdaghImage, ElvinSubText} from './header.styles';
const Header = () => {
    return ( 
        <HeaderContainer>
            <div>
                <BouquetsLeft src={bouquets} />
            </div>
            <HeaderContent>
                <CladdaghImage src={claddagh}/>
                <ElvinSubText>WoJaM</ElvinSubText>
            </HeaderContent>
            <div>
                <BouquetsRight src={bouquets} />
            </div>
        </HeaderContainer>
     );
}
 
export default Header;