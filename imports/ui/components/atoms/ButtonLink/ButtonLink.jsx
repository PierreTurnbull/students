import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    padding : 8px;
    border-radius: 4px;
    background-color: #488bff;
    border : none;
    color : white;
    border-color: none;
    font-size : 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    text-decoration: none;
    
    &:hover{
        opacity : 0.5;
    }  
`

export default StyledLink;