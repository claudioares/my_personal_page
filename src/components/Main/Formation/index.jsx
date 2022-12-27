import image_01 from '../../../assets/imagens/formation/image_01.svg';
import {ContainerGlobal, ContentServiceGlobal} from '../../../global_styled/styledGLobal';
import {ContentFormation, FormationDescription, ContenteDiscription} from './styled';
function Formation () {
    return(
        <ContainerGlobal id='formation'>
             <ContentServiceGlobal>
                <h1>
                    FORMAÇÃO
                </h1>
                <ContentFormation>
                    <img 
                        src={image_01}
                        loading="lazy"
                        alt="imagem de dois prototipo humanos 
                        estudando em um notbook" 
                    />
                    <FormationDescription>
                        <ContenteDiscription>
                            <strong>
                                CUBOS ACADEMY
                            </strong>
                            <p>
                                Treinamento intensivo de 8 mesês em desenvolvimento Fullstack: JavaScript | 
                                TypeScript | html | css | React | NodeJs | Scrum | Inteligencia emocional | 
                                Trabalho de equipe | Projetos do básico ao avançado.
                            </p>
                        </ContenteDiscription>

                        <ContenteDiscription>
                            <strong>
                                UNICESUMAR
                            </strong>
                            <p>
                                Concluir dois simestres de engenharia de software |
                                C | Pensamento computacional | Lógica de programação | História da computação | 
                                Noções de negociação | Noções de desenvolvimento de Hardware
                            </p>
                        </ContenteDiscription>
                    </FormationDescription>
                </ContentFormation>
            </ContentServiceGlobal>
        </ContainerGlobal>
    )
}

export default Formation;