import './styles.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header () {
    return(
        <header className='container_header' id='header'>
            <div className='conponent_header'>
                <nav>
                    <ul className='content_ul'>
                        <AnchorLink href='#services' offset='100' className='link'>Serviços</AnchorLink>
                        <AnchorLink href='#portifolio' offset='100' className='link'>Portifólio</AnchorLink>
                        <AnchorLink href='#formation' offset='100' className='link'>Formação</AnchorLink>
                    </ul>
                </nav>
                <a href='https://drive.google.com/u/1/uc?id=1KzJFKAuakZJ6utCptw9uitY6LdDp7PNx&export=download'><button>DOWNLOAD CV</button></a>
            </div>
        </header>
    )
}

export default Header;