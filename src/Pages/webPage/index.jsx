import { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Footer from '../../components/Footer/index'
import Header from '../../components/Header'
import Main from '../../components/Main'
import SocialContact from '../../components/SocialContacts'
import SideBar from '../../components/SocialContacts/ SideBar'
import UserInfo from '../../components/UserInfo'
import { BodyPage, ContainerPage, DIvUserInfo, SiderSocialContact } from './styled'



function Page() {

  let [status, setStatus] = useState(false)


  useEffect(()=>{
      const intersectionObserver = new IntersectionObserver((entries)=>{
          let stateLink = entries[0].isIntersecting;
          stateLink ? setStatus(false) : setStatus(true)
      });
      intersectionObserver.observe(document.querySelector('#sentinela'));

      return () => intersectionObserver.disconnect()
  });



  return (
    <>
        <ContainerPage>
            <li id='sentinela' style={{ height:'60'}}/>
            <Header />
            <SiderSocialContact>
              <SideBar />
              <SocialContact />
            </SiderSocialContact>
            <DIvUserInfo>
              <UserInfo/>
            </DIvUserInfo>
            <BodyPage>
              <Main />
              {status && <AnchorLink href="#header" offset='5000'
                className='span_page_init'>Inicio &#62;&#62;</AnchorLink>}
            </BodyPage>
            <Footer />
        </ContainerPage>
    </>
  )
}

export default Page;
