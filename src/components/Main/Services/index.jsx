import ui_ux_icon from '../../../assets/imagens/services/ui_ux_icon.svg'
import back_icon from '../../../assets/imagens/services/back_icon.svg'
import front_icon from '../../../assets/imagens/services/front_icon.svg'
import {ContainerGlobal, ContentServiceGlobal} from '../../../global_styled/styledGLobal';
import {ContentDiscription, Card} from './styled';
function Services () {
    return(
        <ContainerGlobal>
            <ContentServiceGlobal>
                <h1 id='services'>
                    SERVIÇOS
                </h1>
                <ContentDiscription>
                    <Card>
                        <img src={ui_ux_icon} alt='icon ui/ux' />
                        <p>
                            Transforme em realidade o que você tem em mente de um 
                            produto digital. Para qualquer plataforma que você considere.
                        </p>
                    </Card>
                    <Card>
                        <img src={back_icon} alt='icon backend' />
                        <p>
                            padrão, construção e implementação de seus aplicativos 
                            com documentação.
                        </p>
                    </Card>
                    <Card>
                        <img src={front_icon} alt='icon frontend' />
                        <p>
                            Crie e mantenha seus sites e também cuide de seu 
                            desempenho e capacidade de tráfego.
                        </p>
                    </Card>
                </ContentDiscription>
            </ContentServiceGlobal>
        </ContainerGlobal>
    )
}

export default Services;