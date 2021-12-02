import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { NavBar } from './component/NavBar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <TodosPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
        </Switch>
      </div >
    </>
  );
}

export default App;
