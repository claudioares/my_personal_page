import './styles.css';
import icon_insta from '../../../assets/imagens/my_name/insta.svg';
import icon_git from '../../../assets/imagens/my_name/gith.svg';
import icon_linkd from '../../../assets/imagens/my_name/linked.svg';
import image_01 from '../../../assets/imagens/my_name/image_01.svg';
import whats from '../../../assets/imagens/mobile/whats_icon.svg';

function MyName () {
    return(
        <div className='container_global'>
            <section className='section_description_user'>
                <p className='user_my_name'>MEU NOME É:</p>
                <div className='user_name'>
                    <h2>Cláudio</h2>
                    <h2>Soares</h2>
                </div>
                <p className='user_presentación'>
                    Sou desenvolvedor FullStack e me dedico de 8 a 10 
                    horas por dia aos estudos e a criação de projetos. Essa dedicação me 
                    da a pura certeza que meu projeto de vida é aprender sempre novas 
                    maneiras de solunionar problemas atavés da tecnólogia; e que vale 
                    muito as horas e me faz ter a certeza que isto é o que eu quero 
                    fazer pro resto da vida
                </p>
                <div className='content_imagens_section'>
                    <a href='https://www.instagram.com/ayresdinhu.dev/' target="_blank"><img src={icon_insta} alt='Logo da rede social instagram' /></a>
                    <a href='https://github.com/claudioares' target="_blank"><img src={icon_git} alt='Logo da rede social github' /></a>
                    <a href='https://www.linkedin.com/in/cl%C3%A1udio-soares-4b9b14216/' target="_blank"><img src={icon_linkd} alt='Logo da rede social linkedin' /></a>
                    <a href='http://wa.me/5598991586420' target="_blank"><img src={whats} alt='Icone de rede social' /></a>
                </div> 
            </section>
            <div className='content_ima_01'>
                <img 
                    src={image_01} 
                    alt='Imagem de livros, computador e uma espaço nava'
                />
            </div>
        </div>
    )
}

export default MyName;
