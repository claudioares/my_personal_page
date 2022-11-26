import './styles.css';
import image_01 from '../../../assets/imagens/formation/image_01.svg';

function Formation () {
    return(
        <div className='container'>
             <div className='content_services'>
                <h1 className='presents_sections'>
                    FORMAÇÃO
                </h1>
                <div className='content_formation'>
                    <img 
                        src={image_01} 
                        alt="imagem de dois prototipo humanos 
                        estudando em um notbook" 
                    />
                    <div className='formation_description'>
                        <div className='contente_discription'>
                            <strong>
                                CUBOS ACADEMY
                            </strong>
                            <p>
                                Treinamento intensivo de 8 mesês em desenvolvimento Fullstack: JavaScript | 
                                TypeScript | html | css | React | NodeJs | Scrum | Inteligencia emocional | 
                                Trabalho de equipe | Projetos do básico ao avançado.
                            </p>
                        </div>

                        <div className='contente_discription'>
                            <strong>
                                UNICESUMAR
                            </strong>
                            <p>
                                Concluir dois simestres de engenharia de software |
                                C | Pensamento computacional | Lógica de programação | História da computação | 
                                Noções de negociação | Noções de desenvolvimento de Hardware
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formation;