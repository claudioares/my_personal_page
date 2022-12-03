import './styles.css';
import arrow_left from '../../../assets/imagens/mobile/arrow_left.svg';
import arrow_rigth from '../../../assets/imagens/mobile/arrow_rigth.svg';
import back_icon from '../../../assets/imagens/services/back_icon.svg';

function Services () {
    return(
        <div className='container_sercices_mobile'>
            <h1>services</h1>
            <div className='content_services_card_mobile'>
                <div>
                    <img src={arrow_left} alt="seta para esquerda" className='arrows'/>
                </div>

                <div className='container_card_services_mobile'>
                    <img src={back_icon} alt='icone de back end' />
                    <strong>
                        Crie e mantenha seus sites e também cuide de seu desempenho e capacidade de tráfego.
                    </strong>
                </div>

                <div>
                    <img src={arrow_rigth} alt="seta para direita" className='arrows' />
                </div>
            </div>
        </div>
    )
}

export default Services;