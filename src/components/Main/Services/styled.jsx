import styled from "styled-components";

export const ContentDiscription = styled.div`
    display: flex;
    gap: 2.8rem;
`
export const Card = styled.div`
  
    background: rgb(17,68,75);
    background: radial-gradient(circle, #11444bc8 15%, #2e5773c1 58%, rgba(6,24,23,1) 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 1.2rem;
    width: 38.8rem;
    height: 26.9rem;
    border-radius: 1rem;

    cursor:not-allowed;

    p{
        text-align: center;
    }
    img{
        position: absolute;
        top: -3rem;
    }
    &:hover{
        opacity: 0.9;
    }
    #services{
        margin-bottom: 8rem;
    }
`