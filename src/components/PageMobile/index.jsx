import HeaderMobile from './HeaderMobile';
import MyNameMobile from './MyNameMobile';
import Services from './Services';
import Portifolio from './Portifólio';
import Formation from './Formation';
import './styles.css';
import FooterMobile from './FooterMobile';


function PageMobile () {
    return(
        <div className='container_mobile_body'>
            <HeaderMobile />
            <div className='container_body_mobile'>
                <MyNameMobile />
                <Services />
                <Portifolio />
                <Formation />
            </div>
            <FooterMobile />
        </div>
    )
}


export default PageMobile;