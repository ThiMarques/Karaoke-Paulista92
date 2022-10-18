import { useEffect, useState } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

import Home from './Screens/Home'
import Promotions from './Screens/Promotions'
import Rooms from './Screens/Rooms';
import Services from './Screens/Services';
import Map from './Screens/Map';
import Contact from './Screens/Contact';

interface Test {
  id: String;
  title: string
}

function App() {

  const [test, setTest] = useState<Test[]>([])
  
  useEffect(() => {
    axios('http://localhost:9000/testAPI')
      .then(response => {
        setTest(response.data)
      })
  })
  
  return (
    <Router>  
      <Routes>
        <Route path='/' element={<Home/>} />
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
