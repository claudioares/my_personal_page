import { useState } from 'react'
import api from "axios";
import Header from "../../components/PotifolioPage/Header/index";
import { 
  HomePage,
  InputHome,
  DivInformation,
  DivImageHome,
  DivInfo
} from './styled';
import BodyPage from '../../components/PotifolioPage/BodyPage/index';
import use_github from '../../assets/imagens/PortiFolioPage/user_github.svg';
import sucess from '../../assets/imagens/PortiFolioPage/sucess.svg';


function Home() {
  const [ nameUser, setNameUser ]=useState('claudioares');
  const [ avatarUser, setAvatarUser ] = useState ('');
  
  const [ repos, setRepos ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ linkUser, setLinkUser ] = useState('');

  const [ name, setName ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      api.get(`https://api.github.com/users/${nameUser}/repos`)
      .then(response => {
        setRepos(response.data)
        setAvatarUser(response.data[0].owner.avatar_url)
        setLinkUser(response.data[0].owner.html_url)
        setName(response.data[0].owner.login)
      })
    
    } catch (error) {
        console.log(error)
    }

    setNameUser('');
  }
  


  const repoFilter = inputValue.length > 0
    ? repos.filter(repo => repo.name.includes(inputValue))
    : [];
  
    
  return (
    <HomePage>
  
      <Header
        avatarUser={avatarUser}
        nameUser={nameUser}
        setNameUser={setNameUser}
        handleSubmit={handleSubmit}
        linkUser={linkUser}
        name={name}
      />

      {linkUser ?
        <>
          <InputHome 
            type='text'
            className='input'
            placeholder='Digite o nome do repositório...'
            onChange={(e)=>setInputValue(e.target.value)}
            value={inputValue}
          />
          <BodyPage
            repos={repos}
            repoFilter={repoFilter}
            inputValue={inputValue}
          />
          <DivInfo>
            <p>Voce também pode digitar o nome de outros usuários na barra de:</p>
            <p className='user_search'>Pesquise nome de usuário...</p>
          </DivInfo>
        </>
        :
        <DivInformation>
          <DivImageHome>
            <img src={use_github} alt='Mascote do github' />
            <img src={sucess} alt='Simbolo de processo bem sucedido' />
          </DivImageHome>
          <h2>Precione ENTER para acessar o repositório!</h2>
        </DivInformation>
      }
    </HomePage>
  )
}

export default Home;
