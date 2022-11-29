import './styles.css';
import { 
    imgSkills,
    imagensProjects
} from '../../../../ultils/skilss';
import { useState } from 'react';


function Portifolio () {

    const [img, setImg] = useState(0)
    const [img1, setImg1] = useState(0)
    const [img2, setImg2] = useState(0)

    if( img === 11){
        setImg(0);
    }
    if( img1 === 11){
        setImg1(0);
    }
    if( img2 === 11){
        setImg2(0);
    }
 
    let imgIndex1 = img;
    let imgIndex2 = img1;
    let imgIndex3 = img2;
    
    function setCurrentImg () {
        setImg(img + 1)
    }

    console.log(img)

    
   
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
                    <img 
                        src={imagensProjects[imgIndex1]} 
                        alt="imagem de projeto" 
                        className='img_portfolio'
                        onClick={() => setCurrentImg()}
                    />
                    <img 
                        src={imagensProjects[imgIndex2]} 
                        alt="imagem de projeto" 
                        className='img_portfolio'
                        onClick={()=>setImg1(img1 + 1)}
                        />
                    <img 
                        src={imagensProjects[imgIndex3]} 
                        alt="imagem de projeto" 
                        className='img_portfolio'
                        onClick={()=>setImg2(img2 + 1)}
                    />
                </div>
            </div>
        </section>
    )
}

export default Portifolio;