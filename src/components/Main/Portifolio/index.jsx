import './styles.css';
import { 
    imgSkills
} from '../../../../ultils/skilss';





function Portifolio () {



    return(
        <section className='container_global' id='portifolio'>
            <div className='content_services_global'>
                <h1 className='presents_sections_global portifolio'>
                    PORTIFÓLIO
                </h1>
                <div className='content_skills_icons'>
                    <div className='div_skills_icons'>
                        {imgSkills.map(obj => (
                            <img src={obj.icon} alt={obj.skill} id='img_skill' key={obj.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portifolio;