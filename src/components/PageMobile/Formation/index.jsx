import './styles.css';



function FormationMobile () {
    return(
        <div className='container_mobile margin_top'>
           <h1 className='h1_mobile'>FORMAÇÃO</h1>
           <div className='gap'>
                <div className='contente_formtion_mobile'>
                    <strong>
                        CUBOS ACADEMY
                    </strong>
                    <p>
                        Treinamento intensivo de 8 mesês em desenvolvimento Fullstack: JavaScript | 
                        TypeScript | html | css | React | NodeJs | Scrum | Inteligencia emocional | 
                        Trabalho de equipe | Projetos do básico ao avançado.
                    </p>
                </div>

                <div className='contente_formtion_mobile'>
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
    )
}

export default FormationMobile;