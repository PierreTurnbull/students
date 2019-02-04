import styled from "styled-components";
import React from "react";

const StyledAvatar = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: url(${props => props.avatarSrc || 'https://s1.qwant.com/thumbr/0x380/1/3/afbc87d3be8b842d177dee88bd175e919a09f4ed11475a3e734f2d3f81bc1a/avatar_circle_blue_512dp.png?u=https%3A%2F%2Fssl.gstatic.com%2Fimages%2Fbranding%2Fproduct%2F1x%2Favatar_circle_blue_512dp.png&q=0&b=1&p=0&a=1'});
    background-size: contain;
    margin-right: 16px;
    background-position: center center;
    background-repeat: no-repeat;
`

const Avatar = props => {
    return (
        <StyledAvatar avatarSrc={props.avatarSrc} />
    )
}

export default Avatar;