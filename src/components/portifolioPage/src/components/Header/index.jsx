import { LinkStyled } from '../../global_styled/LinkStyled';
import icon_g_h from '../../assets/icon_gh.svg';
import icon_or_search from '../../assets/icon_or_search.svg';
import {
    Header, Img, InfoUser, InputHeader, IconSearch, Return
} from './styled';
import { Link } from 'react-router-dom';

function HeaderPage ({
    avatarUser, 
    nameUser, 
    setNameUser, 
    handleSubmit, 
    linkUser,
    name
}) {


    return(
        <Header>
            <InfoUser>
                <Link to="/">
                    <Return>
                        <p className='p1'>&#8220;&#8220;</p>
                        <p>Retornar</p>
                    </Return>
                </Link>
        
                <InputHeader onSubmit={handleSubmit}>
                    <Img>
                        <img src={icon_g_h} alt='Icon github' />
                    </Img>
                    <input 
                        type="text" 
                        placeholder='Digite o nome de usuário...'
                        value={nameUser}
                        onChange={(e)=>setNameUser(e.target.value)}
                    />
                    <IconSearch>
                        <img src={icon_or_search} alt='icon icon_or_search' />
                    </IconSearch>
                </InputHeader>
                <LinkStyled href={linkUser} target='_blank'>
                    {linkUser && 
                        <>
                            <h3>{name}</h3>
                            <Img>
                                <img 
                                    src={avatarUser} 
                                    alt='imagem do usuario' 
                                />
                            </Img>
                        </>
                    }
                </LinkStyled>
            </InfoUser>
        </Header>
    )
}

export default HeaderPage;