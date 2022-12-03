import './styles.css';
import icon_menu_header from '../../../assets/imagens/mobile/icon_menu_header.svg';


function HeaderMobile () {
    return(
        <div className='contaiener_header_mobile'>
            <a className='link_header_mobile' href='https://drive.google.com/u/1/uc?id=1KzJFKAuakZJ6utCptw9uitY6LdDp7PNx&export=download'>
                <button className='button_header_mobile'>DOWNLOAD CV</button>
            </a>
            <img src={icon_menu_header} alt="icone de menu" className='image_header_mobile'/>
        </div>
    )
}

export default HeaderMobile;