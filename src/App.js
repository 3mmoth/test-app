import React from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { List } from './components/List';
import { Skattesats } from './components/Skattesats';
import { Skattekraft } from './components/Skattekraft';
import './App.css';



function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component= {withRouter(List)}/>
        <Route path="/skattesats/:id" exact component= {withRouter(Skattesats)}/>
        <Route path="/skattekraft/:id" exact component = {withRouter(Skattekraft)}/>
      </Switch>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
