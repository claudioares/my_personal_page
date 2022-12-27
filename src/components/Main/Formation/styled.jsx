import styled from "styled-components";

export const ContentFormation = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2.0rem;

    img{
        width: 22.7rem;
        height: 17.0rem;
    }
`
export const FormationDescription = styled.div`
    display: flex;
    gap: 8.5rem;
`
export const ContenteDiscription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    strong{
        font-family: 'Jost';
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.9rem;
    }
    p{
        width: 52.4rem;
        height: 6.9rem;

        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.3rem;
    }
`