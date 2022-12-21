import { Link } from "react-router-dom";
import {
    infoSkills
} from '../../../../ultils/skilss';
import './styles.css';
import TextBalloon from "../../TextBalloon";
import { useState } from "react";
import {
    DivPython,
    DivC,
    DivNode,
    DivReact
} from './styledDivs';



function Portifolio () {
    const [description, setDescription] = useState('');
    const [selectDivStack, setSelectDivStack] = useState({
        python: false,
        c: false,
        node: false,
        react: false
    })

    function handleSelectStack(e){
        let tecId = e.target.id;
        infoSkills.map(obj =>{
       
            if(tecId === 'python'){
                if(obj.tec === 'python'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    python: true,
                    c: false,
                    node: false,
                    react: false
                })
            }

            if(tecId === 'c'){
                if(obj.tec === 'c'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    python: false,
                    c: true,
                    node: false,
                    react: false
                })
            }

            if(tecId === 'nodejs'){
                if(obj.tec === 'nodejs'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    python: false,
                    c: false,
                    node: true,
                    react: false
                })
            }

            if(tecId === 'react'){
                if(obj.tec === 'react'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    python: false,
                    c: false,
                    node: false,
                    react: true
                })
            }

            setTimeout(()=>{
                setSelectDivStack({
                    python: false,
                    c: false,
                    node: false,
                    react: false
                })
            }, 6000)
        })
    }

    return(
        <section className='container_global' id='portifolio'>
            <div className='content_services_global'>
                <h1 className='presents_sections_global portifolio'>
                    PORTIFÓLIO
                </h1>
                <div className="container_divs_stacks">
                    {selectDivStack.react && <DivReact>
                        <TextBalloon
                            description={description}
                        />
                    </DivReact>}

                    {selectDivStack.node && <DivNode>
                        <TextBalloon
                            description={description}
                        />
                    </DivNode>}

                    {selectDivStack.c && <DivC>
                        <TextBalloon
                            description={description}
                        />
                    </DivC>}
                    {selectDivStack.python && <DivPython>
                        <TextBalloon
                            description={description}
                        />
                    </DivPython>}

                </div>
                <div className='content_skills_icons'>
                    <div className='div_skills_icons'>
                        {infoSkills.map(obj => (
                            <img 
                                src={obj.icon} 
                                alt={obj.skill} 
                                className='img_skill'
                                id={obj.tec}
                                key={obj.id}
                                onClick={(e)=>handleSelectStack(e)}
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