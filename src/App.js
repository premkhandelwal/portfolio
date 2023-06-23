import './App.css';
import Home from './components/Home/Home';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import ProjectDetails from './components/Work/projects/ProjectDetails';
function App() {
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects/:id" component={ProjectDetails} />
       
      </Switch>
    </Router>
    </div>
  );
}

export default App;
