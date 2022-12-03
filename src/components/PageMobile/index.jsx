import HeaderMobile from './HeaderMobile';
import MyNameMobile from './MyNameMobile';
import './styles.css';


function PageMobile () {
    return(
        <div className='container_mobile_body'>
            <HeaderMobile />
            <div className='container_body_mobile'>
               <MyNameMobile />
            </div>
        </div>
    )
}


export default PageMobile;