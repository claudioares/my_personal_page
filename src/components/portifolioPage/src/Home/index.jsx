import { useState } from 'react'
import api from "axios";
import Header from "../components/Header/index";
import { 
  HomePage,
  InputHome
} from './styled';
import BodyPage from '../components/BodyPage';


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
      {linkUser && <InputHome 
        type='text'
        className='input'
        placeholder='Digite...'
        onChange={(e)=>setInputValue(e.target.value)}
        value={inputValue}
      />}
      {linkUser && <BodyPage
        repos={repos}
        repoFilter={repoFilter}
        inputValue={inputValue}
      />}
    </HomePage>
  )
}

export default Home;
