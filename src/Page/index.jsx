import './styles.css'
import Header from '../components/Header'
import Main from '../components/Main'

function App() {

  return (
    <div className="container_page">
      <Header />
      <div className='body_page'>
          <Main />
      </div>
    </div>
  )
}

export default App
