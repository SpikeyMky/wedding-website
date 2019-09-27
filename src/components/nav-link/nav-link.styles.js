import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LinkStyled = styled(Link)`
    padding:10px 20px;
    &:hover{
        background:${props=>props.theme.secondary2};
    }
`;