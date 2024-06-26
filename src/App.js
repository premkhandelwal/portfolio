import './App.css';
import Home from './components/Home/Home';
import { Switch, Route,HashRouter } from 'react-router-dom';
import ProjectDetails from './components/Work/projects/ProjectDetails';
require("dotenv").config();
function App() {
  return (
    <div className="App">
      <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects/:id" component={ProjectDetails} />
       
      </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
