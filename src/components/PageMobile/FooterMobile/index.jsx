import './styles.css';
import insta_footer_mobile from '../../../assets/imagens/footer/insta_footer.svg';
import linked_footer_mobile from '../../../assets/imagens/footer/linkd_footer.svg';
import gith_footer_mobile from '../../../assets/imagens/footer/github_footer.svg';


function FooterMobile (){
    return(
        <div className='footer_mobile margin_top'>
            <h1 className='h1_mobile footer_h1'>Contate-me:</h1>
            <div className='content_contacts'>
                <div className='social_contacts'>
                    <div className='email flex'>
                        <span>email:</span>
                        <p>claudiojasoares.dev@gmail.com</p>
                    </div>
                    <div className='social flex'>
                        <span>Social:</span>
                        <div className='social_img_footer_mobile'>
                        <a href='https://www.instagram.com/ayresdinhu.dev/' target="_blank">
                            <img src={insta_footer_mobile} alt='icone de rede social' />
                        </a>
                        <a href='https://www.linkedin.com/in/cl%C3%A1udio-soares-4b9b14216/' target="_blank">
                            <img src={linked_footer_mobile} alt='icone de rede social' />
                        </a>
                        <a href='https://github.com/claudioares' target="_blank">
                            <img src={gith_footer_mobile} alt='icone de rede social' />
                        </a>
                        </div>
                    </div>
                    <div className='phone flex'>
                        <span>Telefone:</span>
                        <p>(98) 99158-6420</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile;