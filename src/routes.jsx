import { Route, Routes} from 'react-router-dom';
import Page from './Pages/webPage';
import Portifolio from './Pages/portifolioPage/index';
import PageMobile from './Pages/PageMobile/index';

const MainHouter = () =>{
     return(
        <Routes>
            <Route  path='/' element={<Page />} />
            <Route path='/portfolio' element={<Portifolio />} />
            <Route path='/mobile' element={<PageMobile />} />
        </Routes>
     )
}

export default MainHouter;