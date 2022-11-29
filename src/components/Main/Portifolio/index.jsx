import './styles.css';
import imgSkills from '../../../../ultils/skilss'

function Portifolio () {
    return(
        <section className='container'>
            <div className='content_services'>
                <h1 className='presents_sections' id='portifolio'>
                    PORTIFÓLIO
                </h1>
                <div className='content_skills_icons'>
                    <strong>Minhas skills</strong>
                    <div className='div_skills_icons'>
                        {imgSkills.map(obj => (
                            <img src={obj.icon} alt={obj.skill} id='img_skill' key={obj.id} />
                        ))}
                    </div>
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