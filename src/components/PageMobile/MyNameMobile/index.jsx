import './styles.css';
import insta from '../../../assets/imagens/my_name/insta.svg';
import gith from '../../../assets/imagens/my_name/gith.svg';
import linked from '../../../assets/imagens/my_name/linked.svg';


function MyNameMobile () {
    return(
        <div className='container_my_name_mobile'>
            <p className='p1'>MEU NOME É:</p>
            <strong>
                Cláudio <strong className='s_name'>Soares</strong> 
            </strong>
            <p className='p2'>
                Sou desenvolvedor front-end a quase dois anos, me dedico quase 10 
                horas por dia aos estudos e a criação de projetos. Essa dedicação 
                me da a pura certeza que meu projeto de vida é aprender sempre 
                novas maneiras de solunionar problemas atavés da tecnólogia; e que 
                vale muito as horas e me faz ter a certeza que isto é o que eu quero 
                fazer pro resto da vida
            </p>
            <div className='inf_social'>
                <a href='https://www.instagram.com/ayresdinhu.dev/' target="_blank"><img src={insta} alt='Icone de rede social' /></a>
                <a href='https://github.com/claudioares' target="_blank"><img src={gith} alt='Icone de rede social' /></a>
                <a href='https://www.linkedin.com/in/cl%C3%A1udio-soares-4b9b14216/' target="_blank"><img src={linked} alt='Icone de rede social' /></a>
            </div>
        </div>
    )
}

export default MyNameMobile;