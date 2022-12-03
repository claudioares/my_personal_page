import HeaderMobile from './HeaderMobile';
import MyNameMobile from './MyNameMobile';
import Services from './Services';
import './styles.css';


function PageMobile () {
    return(
        <div className='container_mobile_body'>
            <HeaderMobile />
            <div className='container_body_mobile'>
                <MyNameMobile />
                <Services />
            </div>
        </div>
    )
}


export default PageMobile;