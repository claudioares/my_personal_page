import './styles.css';
import skills_icons from '../../../assets/imagens/portfolio/skills_icons.svg';

function Portifolio () {
    return(
        <section className='container'>
            <div className='content_services'>
                <h1 className='presents_sections' id='portifolio'>
                    PORTIFÓLIO
                </h1>
                <div className='content_skills_icons'>
                    <strong>Minhas skills</strong>
                    <img src={skills_icons} alt='icones de skills do usuario' className='imagen_portifolio' />
                </div>
                <div className='content_discription'>
                    <div className='card' id='ui_ux'>
                        
                    </div>
                    <div className='card' id='back'>
                        
                    </div>
                    <div className='card' id='front'>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portifolio;