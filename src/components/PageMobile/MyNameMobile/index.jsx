import './styles.css';
import insta from '../../../assets/imagens/my_name/insta.svg';
import gith from '../../../assets/imagens/my_name/gith.svg';
import linked from '../../../assets/imagens/my_name/linked.svg';
import whats from '../../../assets/imagens/mobile/whats_icon.svg';


function MyNameMobile () {
    return(
        <div className='container_my_name_mobile'>
            <p className='p1'>MEU NOME É:</p>
            <strong>
                Cláudio <strong className='s_name'>Soares</strong> 
            </strong>
            <p className='p2'>
                Eu sempre me imaginei trabalhando com algo que pudesse aliar coisas boas na vida das pessoas e aqui como dev tenho certeza que posso me desenvolver nesse projeto de vida.
                Eu me dedico de 8 a 10 horas por dia aos estudos e a criação de projetos e sempre estou disposto a aprender.
                Sou desenvolvedor Full Stack e quero achar novas formas de construir soluções, positivas, através da tecnologia.
            </p>
            <div className='inf_social'>
                <a href='https://www.instagram.com/ayresdinhu.dev/' target="_blank"><img src={insta} alt='Icone de rede social' /></a>
                <a href='https://github.com/claudioares' target="_blank"><img src={gith} alt='Icone de rede social' /></a>
                <a href='https://www.linkedin.com/in/cl%C3%A1udio-soares-4b9b14216/' target="_blank"><img src={linked} alt='Icone de rede social' /></a>
                <a href='http://wa.me/5598991586420' target="_blank"><img src={whats} alt='Icone de rede social' /></a>
            </div>
        </div>
    )
}

export default MyNameMobile;