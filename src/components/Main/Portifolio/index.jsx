import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
    infoSkills
} from '../../../../ultils/skilss';
import TextBalloon from "../../TextBalloon";
import {
    DivC, DivCss,
    DivHtml, DivJavaScript, DivNode, DivPython, DivReact, DivSass, DivTailwindcss, DivTypeScript
} from './styledDivs';
import './styles.css';
import { ContextApi } from '../../../Contexts/ContextApi';



function Portifolio () {
    const {
        selectDivStack,
        setSelectDivStack
    } = useContext(ContextApi)

    const [description, setDescription] = useState('');
    const [linkStacks, setLinkStacks] = useState('');
  

    function handleSelectStack(e){
        let tecId = e.target.id;
        infoSkills.map(obj =>{
       
            if(tecId === 'python'){
                if(selectDivStack.python === true){
                    setSelectDivStack({
                        python: false
                    })
                    return;
                }
                if(obj.tec === 'python'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    python: true,
                })
            }

            if(tecId === 'c'){
                if(selectDivStack.c === true){
                    setSelectDivStack({
                        c: false
                    })
                    return;
                }
                if(obj.tec === 'c'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    python: false,
                    c: true,
                })
            }

            if(tecId === 'nodejs'){
                if(selectDivStack.node === true){
                    setSelectDivStack({
                        node: false
                    })
                    return;
                }
                if(obj.tec === 'nodejs'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    c: false,
                    node: true,
                })
            }

            if(tecId === 'react'){
                if(selectDivStack.react === true){
                    setSelectDivStack({
                        react: false
                    })
                    return;
                }
                if(obj.tec === 'react'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    node: false,
                    react: true
                })
            }

            if(tecId === 'typescript'){
                if(selectDivStack.typescript === true){
                    setSelectDivStack({
                        typescript: false
                    })
                    return;
                }
                if(obj.tec === 'typescript'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    react: false,
                    typescript: true
                })
            }

            if(tecId === 'javascript'){
                if(selectDivStack.javascript === true){
                    setSelectDivStack({
                        javascript: false
                    })
                    return;
                }
                if(obj.tec === 'javascript'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    typescript: false,
                    javascript: true
                })
            }

            if(tecId === 'tailwindcss'){
                if(selectDivStack.tailwindcss === true){
                    setSelectDivStack({
                        tailwindcss: false
                    })
                    return;
                }
                if(obj.tec === 'tailwindcss'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    javascript: false,
                    tailwindcss: true
                })
            }

            if(tecId === 'sass'){
                if(selectDivStack.sass === true){
                    setSelectDivStack({
                        sass: false
                    })
                    return;
                }
                if(obj.tec === 'sass'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    tailwindcss: false,
                    sass: true
                })
            }

            if(tecId === 'css3'){
                if(selectDivStack.css3 === true){
                    setSelectDivStack({
                        css3: false
                    })
                    return;
                }
                if(obj.tec === 'css3'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    sass: false,
                    css3: true
                })
            }
            if(tecId === 'html5'){
                if(selectDivStack.html5 === true){
                    setSelectDivStack({
                        html5: false
                    })
                    return;
                }
                if(obj.tec === 'html5'){
                    setDescription(obj.description)
                    setLinkStacks(obj.link)
                }
                setSelectDivStack({
                    css3: false,
                    html5: true
                })
            }
        })
    }

    function handleClickPage () {
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
                                linkStacks={linkStacks}
                            />
                        </DivHtml>}

                    {selectDivStack.css3 && 
                        <DivCss>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
                            />
                        </DivCss>}

                    {selectDivStack.sass && 
                        <DivSass>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
                            />
                        </DivSass>}
                        
                    {selectDivStack.tailwindcss && 
                        <DivTailwindcss>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
                            />
                        </DivTailwindcss>}

                    {selectDivStack.javascript && 
                        <DivJavaScript>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
                            />
                        </DivJavaScript>}

                    {selectDivStack.typescript && 
                        <DivTypeScript>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
                            />
                        </DivTypeScript>}
                    
                    {selectDivStack.react && 
                        <DivReact>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
                            />
                        </DivReact>}

                    {selectDivStack.node && 
                        <DivNode>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
                            />
                        </DivNode>}

                    {selectDivStack.c && 
                        <DivC>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
                            />
                        </DivC>}
                    {selectDivStack.python && 
                        <DivPython>
                            <TextBalloon
                                description={description}
                                linkStacks={linkStacks}
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