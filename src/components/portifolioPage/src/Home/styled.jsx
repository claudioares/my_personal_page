import styled from "styled-components";


export const HomePage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;

    background-color: #0A0C10;
`
export const InputHome = styled.input`
    text-align: center;

    height: 2.8rem;
    width: 30rem;
    padding: 0 1rem;
    margin: 2rem;
    
    color: rgb(63, 56, 56);

    border-radius: 0.5rem;
    border: none;
    border-style: none;

    font-size: 1.5rem;
`
export const DivError = styled.div`
    position: absolute;
`
export const DivInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: calc(100vh - 6rem);

    color: #f0f3f692;
    
`
export const DivImageHome = styled.div`
    display: flex;
    gap: 1rem;
    img{
        height: 8.5rem;
        width: 8.5rem;
    }
`
export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #C4AD8C;

    gap: 0.5rem;
    margin-top: 4rem;

    .user_search{
        color: #f0f3f692;
    }
`