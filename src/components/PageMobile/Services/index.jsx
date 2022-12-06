import './styles.css';
import back_icon from '../../../assets/imagens/services/back_icon.svg';
import front_icon from '../../../assets/imagens/services/front_icon.svg';
import ui_ux_icon from '../../../assets/imagens/services/ui_ux_icon.svg';
import { useState } from 'react';

function Services () {

    const [card_01, setCard_01] = useState(true);
    const [card_02, setCard_02] = useState(false);
    const [card_03, setCard_03] = useState(false);


    function randomSetCard () {
        if(card_01 === true){
            setCard_01(false)
            setCard_02(true)
        }
        if(card_02 === true){
            setCard_02(false)
            setCard_03(true)
        }
        if(card_03 === true){
            setCard_03(false)
            setCard_01(true)
        }
    }

   
    return(
        <>
            <div className='container_service_mobile margin_top'>
                <h1 className='h1_mobile margin_bottom'>SERVIÇOS</h1>
                <div 
                    className='container_cards'
                    onClick={()=>randomSetCard()}
                >
                    {card_01 && <div className='cards _1'>
                        <img src={ui_ux_icon} alt='logo de rede social' className='imagens' />
                        <p>
                            Transforme em realidade o que você 
                            tem em mente de um produto digital. 
                            Para qualquer plataforma que você considere.
                        </p>
                    </div>}
                    {card_02 && <div className='cards _2'>
                        <img src={back_icon} alt='logo de rede social' className='imagens' />
                        <p>
                            Padrão, construção e implementação de seus aplicativos 
                            com documentação.
                        </p>
                    </div>}
                    {card_03 && <div className='cards _3'>
                        <img src={front_icon} alt='logo de rede social' className='imagens' />
                        <p>
                            Crie e mantenha seus sites 
                            e também cuide de seu desempenho 
                            e capacidade de tráfego.
                        </p>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Services;