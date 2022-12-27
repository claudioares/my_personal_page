import styled, {createGlobalStyle} from "styled-components";

const GLobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;

        
        min-height: 100vh;
        

        font-size: 1.6rem;
        margin: 0;
    }
    li {
        list-style-type: none;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }

    ::-webkit-scrollbar-track{
        background-color: #0a0909;
    }
    ::-webkit-scrollbar{
        width: 0.1;
        background-color: #0a0909;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #C4AD8C;
        border-radius: 1.5rem;
    }

`
export const ContainerGlobal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 18.2rem 0;

    height: 100vh;

    color: white;

    #formation{
        margin-top: 52.0rem;
    }
`
export const ContentServiceGlobal = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    align-items: center;

    z-index: 1;

    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 1.7rem;

        color: #C4AD8C;

        margin-bottom: 10rem;
    }

    .portifolio{
        position: relative;
        margin-bottom: 1rem;
    }
    .list_portfilio{
        text-align: center;
        
        width: 100%;
        margin-top: 3rem;

        color: #C4AD8C;

        &:hover{
            color: aliceblue;
        }
    }
`

export default GLobalStyled;