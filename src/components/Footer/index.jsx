import {ContainerFooter, ContentFooter, Left} from './styled';


function Footer () {
    return(
        <ContainerFooter id='footer'>
            <ContentFooter>
                <Left>
                    <span>
                        <p>Email:</p>
                        <p>claudiojasoares.dev@gmail.com</p>
                    </span>

                    <span>
                        <p>Telefone:</p>
                        <a href='http://wa.me/5598991586420' target="_blank">&#40;98&#41; 99158-6420</a>               
                    </span>

                    <span>
                        <p>Localização:</p>
                        <p>Pinheiro-MA</p>
                    </span>
                </Left>
            </ContentFooter>
        </ContainerFooter>
    )
}

export default Footer;