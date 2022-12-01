import './styles.css';
import HeaderMobile from './HeaderMobile';


function PageMobile () {
    return(
        <div className='container_mobile_body'>
            <HeaderMobile />
            <div className='container_body_mobile'>
                <h1>Versão mobile em desenvolvimento</h1>
            </div>
        </div>
    )
}


export default PageMobile;