import styled from "styled-components";
import React from "react";
import Avatar from "../../atoms/Avatar/Avatar";
import { Link } from 'react-router-dom';

const StyledP = styled.p`
font-family: Lato;
font-size: 18px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
color: #52565f;
width: 100%;
text-align: left;
&::first-letter{
    text-transform: uppercase;
}
`

const StyledListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    width: 100%;
    background: white;    
    padding: 8px 16px;
    text-decoration: none;
    box-shadow: 0 4px 10px 0 rgba(202, 202, 202, 0.5);

    &:last-child{
        margin-bottom: 0;
    }
`

const ListItem = (props) => {
    return (
        <StyledListItem>
            <Avatar avatarSrc={props.avatar} />
            <StyledP>{props.primaryText}</StyledP>
            {
                props.editIcon
            }
            {
                props.closeIcon
            }
        </StyledListItem>
    )
}

export default ListItem;