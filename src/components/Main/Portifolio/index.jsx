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
    DivReact,
    DivTypeScript,
    DivJavaScript,
    DivTailwindcss,
    DivSass,
    DivCss,
    DivHtml
} from './styledDivs';



function Portifolio () {
    const [description, setDescription] = useState('');
    const [selectDivStack, setSelectDivStack] = useState({
        python: false,
        c: false,
        node: false,
        react: false,
        typescript: false,
        javascript: false,
        tailwindcss: false,
        sass: false,
        css3: false,
        html5: false
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
                })
            }

            if(tecId === 'c'){
                if(obj.tec === 'c'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    python: false,
                    c: true,
                })
            }

            if(tecId === 'nodejs'){
                if(obj.tec === 'nodejs'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    c: false,
                    node: true,
                })
            }

            if(tecId === 'react'){
                if(obj.tec === 'react'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    node: false,
                    react: true
                })
            }

            if(tecId === 'typescript'){
                if(obj.tec === 'typescript'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    react: false,
                    typescript: true
                })
            }

            if(tecId === 'javascript'){
                if(obj.tec === 'javascript'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    typescript: false,
                    javascript: true
                })
            }

            if(tecId === 'tailwindcss'){
                if(obj.tec === 'tailwindcss'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    javascript: false,
                    tailwindcss: true
                })
            }

            if(tecId === 'sass'){
                if(obj.tec === 'sass'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    tailwindcss: false,
                    sass: true
                })
            }

            if(tecId === 'css3'){
                if(obj.tec === 'css3'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    sass: false,
                    css3: true
                })
            }
            if(tecId === 'html5'){
                if(obj.tec === 'html5'){
                    setDescription(obj.description)
                }
                setSelectDivStack({
                    css3: false,
                    html5: true
                })
            }

            setTimeout(()=>{
                setSelectDivStack({
                    python: false,
                    c: false,
                    node: false,
                    react: false,
                    typescript: false,
                    javascript: false,
                    tailwindcss: false,
                    sass: false,
                    css3: false,
                    html5: false
                })
            }, 5000)
        })
    }

   
    return(
        <section className='container_global' id='portifolio'>
            <div className='content_services_global'>
                <h1 className='presents_sections_global portifolio'>
                    PORTIFÓLIO
                </h1>
                <div className="container_divs_stacks">
                    {selectDivStack.html5 && 
                        <DivHtml>
                            <TextBalloon
                                description={description}
                            />
                        </DivHtml>}

                    {selectDivStack.css3 && 
                        <DivCss>
                            <TextBalloon
                                description={description}
                            />
                        </DivCss>}

                    {selectDivStack.sass && 
                        <DivSass>
                            <TextBalloon
                                description={description}
                            />
                        </DivSass>}
                        
                    {selectDivStack.tailwindcss && 
                        <DivTailwindcss>
                            <TextBalloon
                                description={description}
                            />
                        </DivTailwindcss>}

                    {selectDivStack.javascript && 
                        <DivJavaScript>
                            <TextBalloon
                                description={description}
                            />
                        </DivJavaScript>}

                    {selectDivStack.typescript && 
                        <DivTypeScript>
                            <TextBalloon
                                description={description}
                            />
                        </DivTypeScript>}
                    
                    {selectDivStack.react && 
                        <DivReact>
                            <TextBalloon
                                description={description}
                            />
                        </DivReact>}

                    {selectDivStack.node && 
                        <DivNode>
                            <TextBalloon
                                description={description}
                            />
                        </DivNode>}

                    {selectDivStack.c && 
                        <DivC>
                            <TextBalloon
                                description={description}
                            />
                        </DivC>}
                    {selectDivStack.python && 
                        <DivPython>
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