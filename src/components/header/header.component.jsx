import React from 'react';
import claddagh from '../../assets/jm-claddagh.png';

import {HeaderContainer, CladdaghImage} from './header.styles';
const Header = () => {
    return ( 
        <HeaderContainer>
            <CladdaghImage src={claddagh}/>
            <p>Testing header</p>
        </HeaderContainer>
     );
}
 
export default Header;