import './styles.css';
import ui_ux_icon from '../../../assets/imagens/services/ui_ux_icon.svg'
import back_icon from '../../../assets/imagens/services/back_icon.svg'
import front_icon from '../../../assets/imagens/services/front_icon.svg'

function Services () {
    return(
        <section className='container'>
            <div className='content_services'>
                <h1 className='presents_sections'>
                    SERVIÇOS
                </h1>
                <div className='content_discription'>
                    <div className='card' id='card'>
                        <img src={ui_ux_icon} alt='icon ui/ux' />
                        <p>
                            Transforme em realidade o que você tem em mente de um 
                            produto digital. Para qualquer plataforma que você considere.
                        </p>
                    </div>
                    <div className='card' id='card'>
                        <img src={back_icon} alt='icon backend' />
                        <p>
                            padrão, construção e implementação de seus aplicativos 
                            com documentação.
                        </p>
                    </div>
                    <div className='card' id='card'>
                        <img src={front_icon} alt='icon frontend' />
                        <p>
                            Crie e mantenha seus sites e também cuide de seu 
                            desempenho e capacidade de tráfego.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;