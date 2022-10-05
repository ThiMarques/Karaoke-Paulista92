import { BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

import Home from '../src/Screens/Home'
import Promotions from '../src/Screens/Promotions'
import Rooms from './Screens/Rooms';
import Services from './Screens/Services';
import Map from './Screens/Map';
import Contact from './Screens/Contact';

function App() {

  return (
    <Router>  
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/promotions' element={<Promotions/>} />
        <Route path='/rooms' element={<Rooms/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>     
    </Router>
  );
  
}


export default App;
