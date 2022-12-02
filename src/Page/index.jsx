import './styles.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PageMobile from '../components/PageMobile'
import { useEffect, useState } from 'react'




function Page() {

  const [containerMobile, setContainerMobile] = useState(false)
  const [containerWeb, setContainerWeb] = useState(true)

  useEffect(()=>{
    let screen = window.screen.availWidth;
    if(screen <= 425){
      setContainerMobile(true)
      setContainerWeb(false)
    } else {
      setContainerMobile(false)
      setContainerWeb(true)
    }
  },[])

  
  return (
    <>
      <div className='curriculum_modal'>
      </div>
      { containerWeb &&
        <div className="container_page" id='header'>
        <Header />

        <div className='body_page'>
            <Main />
            <AnchorLink href='#header' className='span_page_init'>Inicio &#62;&#62;</AnchorLink>
        </div>
        <Footer />
      </div>
      }

      {containerMobile && 
        <div className='container_mobile'>
          <PageMobile />
        </div>
      }    
    </>
  )
}

export default Page;
