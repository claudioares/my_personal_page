import './styles.css';

function Header () {
    return(
        <header className='container_header'>
            <div className='conponent_header'>
                <nav>
                    <ul className='content_ul'>
                        <li>Serviços</li>
                        <li>Portifólio</li>
                        <li>Formação</li>
                        <li>Contatos</li>
                    </ul>
                </nav>
                <button>DOWNLOAD CV</button>
            </div>
        </header>
    )
}

export default Header;