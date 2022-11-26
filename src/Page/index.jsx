import './styles.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function App() {

  return (
    <div className="container_page">
      <Header />
      <div className='body_page'>
          <Main />
          <span className='span_page_init'>Inicio &#62;&#62;</span>
      </div>
      <Footer />
    </div>
  )
}

export default App
