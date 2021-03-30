import React from 'react';
import{HashRouter, Route} from 'react-router-dom';
import UserList from './user';
import Header from './header';
import Home from './home';
import About from './about';
import ContactUs from './contact';
import UserLogin from './login';
import Register from './signup';
import Product from './product';
import StateOne from './state1';
import StateTwo from './state2';
import StateThree from './state3';
import StateFour from './state4';
import StateFive from './state5';
import StateSix from './state6';

function App() {
  return(
        <HashRouter>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about.html" component={About} />
          <Route exact path="/userlist.html" component={UserList}/>
          <Route exact path="/contact" component={ContactUs}/>
          <Route exact path="/login" component={UserLogin}/>
          <Route exact path="/signup" component={Register}/>
          <Route exact path="/product" component={Product}/>
          <Route exact path="/state1" component={StateOne}/>
          <Route exact path="/state2" component={StateTwo}/>
          <Route exact path="/state3" component={StateThree}/>
          <Route exact path="/state4" component={StateFour}/>
          <Route exact path="/state5" component={StateFive}/>
          <Route exact path="/state6" component={StateSix}/>
        </HashRouter>
  )
}

export default App;
