import { Route, Routes} from 'react-router-dom';
import Page from './Page';
import Home from './components/portifolioPage/src/Home/index';

const MainHouter = () =>{
     return(
        <Routes>
            <Route  path='/' element={<Page />} />
            <Route path='/portfolio' element={<Home />} />
        </Routes>
     )
}

export default MainHouter;