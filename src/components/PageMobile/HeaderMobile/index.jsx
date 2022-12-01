import './styles.css';
import icon_menu_header from '../../../assets/imagens/mobile/icon_menu_header.svg';


function HeaderMobile () {
    return(
        <div className='contaiener_header_mobile'>
            <a className='link_header_mobile'>
                <button className='button_header_mobile'>DOWNLOAD CV</button>
            </a>
            <img src={icon_menu_header} alt="icone de menu" className='image_header_mobile'/>
        </div>
    )
}

export default HeaderMobile;