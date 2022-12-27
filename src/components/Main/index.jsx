import Formation from "./Formation";
import Portifolio from "./Portifolio";
import Services from "./Services";
import styled from "styled-components";

function Main () {

    const DivSection = styled.div`
      max-height: 100%;
      background-color: #0a0909;

    `
    return(
      <DivSection>
        <Services />
        <Portifolio />
        <Formation />
      </DivSection>   
    )
}

export default Main;