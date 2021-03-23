import React from 'react';
import{HashRouter, Route} from 'react-router-dom';
import UserList from './user';
import Header from './header';
import Home from './home';
import About from './about';

function App() {
  return(
        <HashRouter>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact  path="/about.html" component={About} />
          <Route exact path="/userlist.html" component={UserList}/>
        </HashRouter>
  )
}

export default App;
