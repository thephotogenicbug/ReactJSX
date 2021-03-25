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
        </HashRouter>
  )
}

export default App;
