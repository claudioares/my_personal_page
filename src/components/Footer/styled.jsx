import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: #303541;
    z-index: 3;

    strong{
        font-family: 'Jost';
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.9rem;

        color: #ED9A5E;
    }
`
export const ContentFooter = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    height: 8rem;
    width: 99.2rem; 
`
export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;

    width: 75%;
    gap: 2rem;
    margin-top: 0.5rem;
    color: #FFFFFF;

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.3rem;

        font-family: 'Jost';
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.3rem;
        color: #df813f;

        a {
            color: #FFFFFF;
            font-style: italic;
            text-decoration: underline;
        }
        &:hover a {
            color: #df813f;
        }
    }
`