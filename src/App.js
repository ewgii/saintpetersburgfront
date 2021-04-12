import './App.css';
import DashboardComponent from './components/DashboardComponent';
import ArchivedDashboardComponent from './components/Project/ArchivedProjectComponent';
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/projects" component={DashboardComponent} />
      <Route path="/archivedProjects" component={ArchivedDashboardComponent}/>
    </div>
  );
}

export default App;
