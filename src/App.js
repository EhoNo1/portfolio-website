import logo from './logo.svg';
import CardGrid from './components/CardGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import projectData from './data/projects.json';

function App() {
  return (
    <div className="App">
      <h1>Evan Overly</h1>
      <h2>Software Design & Development Professional</h2>
      <div className="navbar">
        <ul>
          <li><a href="https://www.linkedin.com/in/evan-overly/">Linkedin</a></li>
          <li><a href="https://uwf.joinhandshake.com/stu/users/23261568">Handshake</a></li>
          <li><a href="https://github.com/EhoNo1">GitHub</a></li>
        </ul>
      </div>

      <hr />
      <h2>Previous Works</h2>
      <CardGrid data={projectData} />


    </div>
  );
}

export default App;
