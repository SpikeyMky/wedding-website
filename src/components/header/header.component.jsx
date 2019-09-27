import React from 'react';
import claddagh from '../../assets/jm-claddagh.png';
import bouquets from '../../assets/bouquets.png';

import { HeaderContainer, BouquetsLeft, BouquetsRight, HeaderContent, CladdaghImage, ElvinSubText } from './header.styles';
import NavLink from '../nav-link/nav-link.component';
const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <BouquetsLeft src={bouquets} />
            </div>
            <HeaderContent>
                <NavLink text="Venue" to="/link"/>
                <NavLink text="Accomodation" to="/link"/>
                <div>
                    <CladdaghImage src={claddagh} />
                    <ElvinSubText>WoJaM</ElvinSubText>
                </div>
                <NavLink text="Wedding gifts" to="/link"/>
                <NavLink text="Song requests" to="/link"/>
            </HeaderContent>
            <div>
                <BouquetsRight src={bouquets} />
            </div>
        </HeaderContainer>
    );
}

export default Header;