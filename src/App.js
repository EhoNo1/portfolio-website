import logo from './logo.svg';
import CardGrid from './components/CardGrid';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import projectData from './data/projects.json';

function App() {
  let randomIndex = Math.floor(Math.random() * projectData.length);
  let randomCardData = projectData[randomIndex];
  console.log(randomCardData);

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
      <h2>Have tried this?</h2>
      <div className='container'>
        <div className='row'>
          <Card data={randomCardData} />
        </div>
      </div>
      <h2>Previous Works</h2>
      <CardGrid data={projectData} />


    </div>
  );
}

export default App;
