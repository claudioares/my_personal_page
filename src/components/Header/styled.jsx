import styled from "styled-components";


export const ContainerHeader = styled.div`
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        padding: 2rem 11.2rem 2rem 50.6rem ;
        height: 8rem;
        right: 0;
        left: 0;

        z-index: 2;

        background-color: #0a0909;
`
export const ComponentHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 14.3rem;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
    
        width: 11.7rem;
        height: 2.9rem;

        background-color: rgba(58, 58, 58, 0.65);
        border: 0.01rem solid #c4ad8c;
        border-radius: 0.2rem;
        color: #C4AD8C;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1rem;

        cursor: pointer;

        &:hover{
            border: 0.01rem solid white;
            color: white;
        }
    }
`
export const ContenteUl = styled.div `
    display: flex;
    gap: 3.5rem;
    
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 1250px;
    
    .link{
        color: #c4ad8c;
        cursor: pointer;
        
        &:hover {
            color: white;
        }
    }
`