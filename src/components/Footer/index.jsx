import './styles.css';
import social_redes from '../../assets/imagens/footer/social_redes.svg';

function Footer () {
    return(
        <footer className='container_footer'>
            <div className='content_footer'>
                <div className='left'>
                    <strong>Contate-me:</strong>
                    <span>
                        <p>email:</p>
                        <p>claudiojasoares.dev@gmail.com</p>
                    </span>

                    <span>
                        <p>telefone:</p>
                        <p>&#40;98&#41; 99158-6420</p>
                    </span>

                    <span>
                        <p>Localização:</p>
                        <p>Pinheiro-MA</p>
                    </span>
                </div>
                <div className='rigth'>
                    <span>Social:</span>
                    <img src={social_redes} alt="icones de redes sociais" />
                </div>

            </div>
        </footer>
    )
}

export default Footer;