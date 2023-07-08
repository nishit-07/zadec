import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Elevators from './components/Elevators';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import Component from './components/Component';
import './App.css'
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";



function App() {

return (
<>
<Router>
    <Navbar/>
    
   
  
   
<Routes> 
 <Route exact path="/"     element={<Home />}></Route> 
 <Route exact path="/About"  element={<About  />}></Route> 
<Route exact path="/Elevators"  element={<Elevators  />}></Route>

<Route exact path="/Component"  element={<Component  />}></Route>

<Route exact path="/Service"  element={<Service  />}></Route> 
<Route exact path="/About"  element={<About  />}></Route> 
<Route exact path="/Contact"  element={<Contact  />}></Route> 


</Routes>
<Footer/>
</Router>
</>
 
)
 

}

export default App;
