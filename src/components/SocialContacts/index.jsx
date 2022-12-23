import {ContainerSocialContact} from './styled';
import icon_git from '../../assets/imagens/my_name/gith.svg';
import icon_linkd from '../../assets/imagens/my_name/linked.svg';
import icon_insta from '../../assets/imagens/my_name/insta.svg';
import whats from '../../assets/imagens/mobile/whats_icon.svg';

function SocialContact () {
    return(
        <ContainerSocialContact>
                    <a href='https://www.instagram.com/ayresdinhu.dev/' target="_blank"><img src={icon_insta} alt='Logo da rede social instagram' /></a>
                    <a href='https://github.com/claudioares' target="_blank"><img src={icon_git} alt='Logo da rede social github' /></a>
                    <a href='https://www.linkedin.com/in/cl%C3%A1udio-soares-dev/' target="_blank"><img src={icon_linkd} alt='Logo da rede social linkedin' /></a>
                    <a href='http://wa.me/5598991586420' target="_blank"><img src={whats} alt='Icone de rede social' /></a>
        </ContainerSocialContact>
    )
}


export default SocialContact;