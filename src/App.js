import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route path="/projects" render={() => <Projects />}/>
        <Route path="/contact" render={() => <Contact />}/>
      </Switch>
    </div>
  );
}

export default App;
