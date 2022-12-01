import './styles.css';
import { 
    imgSkills,
    imagensProjects
} from '../../../../ultils/skilss';
import { useRef } from 'react';




function Portifolio () {

    const carousel = useRef();



    return(
        <section className='container'>
            <div className='content_services'>
                <h1 className='presents_sections' id='portifolio'>
                    PORTIFÓLIO
                </h1>
                <div className='content_skills_icons'>
                    <div className='div_skills_icons'>
                        {imgSkills.map(obj => (
                            <img src={obj.icon} alt={obj.skill} id='img_skill' key={obj.id} />
                        ))}
                    </div>
                </div>

                <div className='cell'>
                    <div className='inner'>
                        {imagensProjects.map(imagem =>(
                            <div key={imagem} className="item">
                                <img src={imagem} alt="imagem" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portifolio;