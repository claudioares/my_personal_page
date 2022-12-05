import './styles.css';
import { 
    imgSkills
} from '../../../../ultils/skilss';



function Portifolio () {
    return(
        <div className='container_mobile margin_top'>
           <h1 className='h1_mobile'>PORTIFÓLIO</h1>
            <div className='content_img_portifolio_mobile'>
                {imgSkills.map(obj => (
                    <img src={obj.icon} alt={obj.skill} id='img_skill' key={obj.id} />
                ))}
            </div>
        </div>
    )
}


export default Portifolio;