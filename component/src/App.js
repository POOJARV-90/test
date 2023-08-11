

import { Routes , Route } from 'react-router-dom';
import Register from './compo/Register';
import Navbar from './compo/Navbar';
import Login from './compo/Login';
import Addtodo from './compo/Addtodo';
import Home from './compo/Home';
import Alltodo from './compo/Alltodo';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/Register' element ={<Register/>}/>
        <Route exact path='/Login' element ={<Login/>}/>
        <Route exact path='/Addtodo' element ={<Addtodo/>}/>
        <Route exact path='/Alltodo' element ={<Alltodo/>}/>
        <Route exact path='/' element ={<Home/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
