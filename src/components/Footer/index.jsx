import './styles.css';
import insta from '../../assets/imagens/footer/insta_footer.svg';
import linkd from '../../assets/imagens/footer/linkd_footer.svg';
import github from '../../assets/imagens/footer/github_footer.svg';


function Footer () {
    return(
        <footer className='container_footer'>
            <div className='content_footer'>
                <div className='left'>
                    <strong>Contate-me:</strong>
                    <span>
                        <p>Email:</p>
                        <p>claudiojasoares.dev@gmail.com</p>
                    </span>

                    <span>
                        <p>Telefone:</p>
                        <a href='http://wa.me/5598991586420' target="_blank"><p style={{color:'white'}}>&#40;98&#41; 99158-6420</p></a>
                        
                    </span>

                    <span>
                        <p>Localização:</p>
                        <p>Pinheiro-MA</p>
                    </span>
                </div>
                <div className='rigth'>
                    <span>Social:</span>
                    <div className='social_span'>
                        <a href='https://www.instagram.com/ayresdinhu.dev/' target="_blank"><img src={insta} alt="icones de redes sociais" /></a>
                        <a href='https://www.linkedin.com/in/cl%C3%A1udio-soares-dev/' target="_blank"><img src={linkd} alt="icones de redes sociais" /></a>
                        <a href='https://github.com/claudioares' target="_blank"><img src={github} alt="icones de redes sociais" /></a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;