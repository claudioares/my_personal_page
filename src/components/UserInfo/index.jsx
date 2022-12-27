import { ConatinerInforUser, SectionDescriptionUser, UserName, UserPresentacion } from './styled';

function UserInfo () {

    return(
        <>
            <ConatinerInforUser>
                <SectionDescriptionUser id='infor_user'>
                    <p>MEU NOME É:</p>
                    <UserName>
                        <h2>Cláudio</h2>
                        <h2>Soares</h2>
                    </UserName>
                    <UserPresentacion>
                        Eu sempre me imaginei trabalhando com algo que pudesse aliar coisas boas na vida das pessoas e aqui como dev tenho certeza que posso me desenvolver nesse projeto de vida.
                        Eu me dedico de 8 a 10 horas por dia aos estudos e a criação de projetos e sempre estou disposto a aprender.
                        Sou desenvolvedor Full Stack e quero achar novas formas de construir soluções, positivas, através da tecnologia.
                    </UserPresentacion>
                </SectionDescriptionUser>
            </ConatinerInforUser>
        </>
    )
}

export default UserInfo;
