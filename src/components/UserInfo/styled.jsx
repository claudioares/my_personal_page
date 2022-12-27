import styled from "styled-components";
import backgroud from '../../assets/imagens/my_name/background.svg';


export const ConatinerInforUser = styled.div`

        position: fixed;
        background-image:linear-gradient(#0000008f,#0000005e), url(${backgroud});
        background-size:100%;
        background-repeat:unset;

        display: flex;
        align-items: center;

        width: 100%;
        height: 80rem;

        padding: 0 12rem;

        color: white;

        top: 8rem;
`
export const SectionDescriptionUser = styled.section`
        display: flex;
        flex-direction: column;

        gap: 0.5rem;
        
        h2{
                font-family: 'Plus Jakarta Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 3rem;
                line-height: 3.8rem;
        }
        p{
                display: flex;
                gap: 0.6rem;
                width: 22.0rem;
        }
`
export const UserName = styled.div`
        display: flex;
        gap: 0.6rem;
        width: 22.0rem;

        h2:last-child {
                color: #C4AD8C;
        }
`
export const UserPresentacion = styled.p`

        position: sticky;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        min-width: 61.6rem;
        

        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.5rem;

        margin-bottom: 1.0rem;


`