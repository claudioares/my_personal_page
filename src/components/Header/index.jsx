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
                        <AnchorLink href='#contacts' offset='100' className='link'>Contatos</AnchorLink>
                    </ul>
                </nav>
                <button>DOWNLOAD CV</button>
            </div>
        </header>
    )
}

export default Header;