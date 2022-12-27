import styled from "styled-components";


export const LinkStyled = styled.a`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    list-style: none;
    color: #F0F3F6;
    cursor: pointer;

    h3{
     font-size:medium;
     font-weight: lighter;
    }
    &:hover h3 {
        color: rgb(224, 180, 121);;
    }
    &:hover li{
        color: rgb(224, 180, 121);
    }
`