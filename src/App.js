//import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Default from './components/Default/Default';
import Home from './components/Home/Home';
import Navbar from './components/Header&Footer/Navbar';
import Footer from './components/Header&Footer/Footer';
import Contact from './components/Contactus/Contact';
import Services from './components/Services/Services';
import reactservice from './components/Services/reactservice';
import Digitalservice from './components/Services/Digitalservice'
//import { Modal } from 'bootstrap';
//import Sermodal from './components/Services/Sermodal'

class App extends Component {
  render(){
  return (    
    <React.Fragment>
        {/* <MainHeader/> */}
        <BrowserRouter>          
          <Navbar/>
          {/* <Sermodal modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}/> */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/reactservice" component={reactservice}/>
            <Route path="/digitalservice" component={Digitalservice}/>            
            <Route path="/contactus" component={Contact}/>            
            <Route component={Default}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
    </React.Fragment>
  )};
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
