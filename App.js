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
import StateSeven from './state7';
import StateApiOne from './stateapi1';
import StateApiTwo from './stateapi2';
import StateApiThree from './stateapi3';
import StateApiFour from './stateapi4';
import StateApiFive from './stateapi5';
import HookOne from './hook1';
import HookTwo from './hook2';
import HookThree from './hook3';
import HookFour from './hook4';
import HookFive from './hook5';
import MyProps from './props';
import Validation from './validation';


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
          <Route exact path="/state7" component={StateSeven}/>
          <Route exact path="/stateapi1" component={StateApiOne}/>
          <Route exact path="/stateapi2" component={StateApiTwo}/>
          <Route exact path="/stateapi3" component={StateApiThree}/>
          <Route exact path="/stateapi4" component={StateApiFour}/>
          <Route exact path="/stateapi5" component={StateApiFive}/>
          <Route exact path="/hook1" component={HookOne}/>
          <Route exact path="/hook2" component={HookTwo}/>
          <Route exact path="/:userid/hook3" component={HookThree}/>
          <Route exact path="/:userid/:city/hook4" component={HookFour}/>
          <Route exact path="/:id/hook5" component={HookFive}/>
          <Route exact path="/props" component={MyProps}/>
          <Route exact path="/validation" component={Validation}/>
        </HashRouter>
  )
}

export default App;
