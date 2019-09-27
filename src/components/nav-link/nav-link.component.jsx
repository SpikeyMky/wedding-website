import React from 'react';

import {LinkStyled} from './nav-link.styles';

const NavLink = ({text, to}) => {
    return (
        <LinkStyled to={to}>
            {text}
        </LinkStyled>
    )
}

export default NavLink;