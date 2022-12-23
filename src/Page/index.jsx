import { useEffect, useState, useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import PageMobile from '../components/PageMobile'
import SocialContact from '../components/SocialContacts'
import UserInfo from '../components/UserInfo'
import './styles.css'
import styled from 'styled-components'


function Page() {

  const [containerMobile, setContainerMobile] = useState(false)
  const [containerWeb, setContainerWeb] = useState(true)

  useEffect(()=>{
    let screenW = window.screen.availWidth;
  
    if(screenW <= 428 ){
      setContainerMobile(true)
      setContainerWeb(false)
    } else {
      setContainerMobile(false)
      setContainerWeb(true)
    }
  },[])

  const DIvUserInfo = styled.div`
    position: relative;
    width: 180rem;
    height: 100rem;
  `

  return (
    <>
      { containerWeb &&
        <div className="container_page" id='header'>
          <Header />
          <div className='container_social_contact'>
            <SocialContact />
          </div>
          <DIvUserInfo>
            <UserInfo />
          </DIvUserInfo>
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
