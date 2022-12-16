import { Link } from "react-router-dom";
import {
    imgSkills
} from '../../../../ultils/skilss';
import './styles.css';





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
                            <img 
                                src={obj.icon} 
                                alt={obj.skill} 
                                id='img_skill' 
                                key={obj.id} 
                            />
                        ))}
                    </div>
                </div>
                <Link to="/portfolio" className='portifolio list_portfilio'>Pesquise portifólio &#187;	&#187;</Link>
                <span>MyUsername: claudioares </span>
            </div>
        </section>
    )
}

export default Portifolio;