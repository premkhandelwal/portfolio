import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectDetails from './components/Work/projects/ProjectDetails';
function App() {
  return (
    <div className="App">

      
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects/:id" component={ProjectDetails} />
        {/* <Route path="/" component={ProjectDetails} /> */}
      
      </Switch>
    </Router>
    </div>
  );
}

export default App;
