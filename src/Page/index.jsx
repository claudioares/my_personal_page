import './styles.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Page() {

  return (
    <div className="container_page">
      <div  id='header'/>
      <Header />

      <div className='body_page'>
          <Main />
          <AnchorLink href='#header' className='span_page_init'>Inicio &#62;&#62;</AnchorLink>
      </div>

      <Footer />
    </div>
  )
}

export default Page;
