import styled from "styled-components";

export const DIvUserInfo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 80rem;
    margin-top: 8rem;
`
export const BodyPage = styled.div`
    position: relative;
    background-color: #0a0909;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100%;

    .span_page_init{
        position:sticky;
    
        width: 90%;
        text-align: right;
        bottom: 8%;

        font-family: 'Jost';
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.3rem;
        text-decoration-line: underline;

        color: #C4AD8C;

        cursor: pointer;

        z-index: 1;

        &:hover{
            color: #ffff;
        }
    }
`
export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;

    background-color: #0a0909;
`
export const SiderSocialContact = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    height: 100%;

    z-index: 1;
`