import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
    ComponentHeader, ContainerHeader, ContenteUl, Nav
} from './styled';

function Header () {

    return(
        <>
            <ContainerHeader className='opacity' id='header'>
                <ComponentHeader>
                    <Nav>
                        <AnchorLink href='#footer' offset='400' className='link' >Contate-me</AnchorLink>
                        <ContenteUl>
                            <AnchorLink href='#services' offset='300' className='link' >Serviços</AnchorLink>
                            <AnchorLink href='#portifolio' offset='420' className='link' >Portifólio</AnchorLink>
                            <AnchorLink href='#formation' offset='-55' className='link' >Formação</AnchorLink>
                        </ContenteUl>
                    </Nav>
                    <a href='https://drive.google.com/u/1/uc?id=1KzJFKAuakZJ6utCptw9uitY6LdDp7PNx&export=download'><button>DOWNLOAD CV</button></a>
                </ComponentHeader>
            </ContainerHeader>
        </>
    )
}

export default Header;