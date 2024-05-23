import CardGrid from './components/CardGrid';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import projectData from './data/projects.json';
import WoodHR from './components/WoodHR';


function App() {
  let randomPickPool = [];
  projectData.forEach((entry) => {
    let priority = entry.priority;
    while (priority > 0) {
      randomPickPool.push(entry);
      priority--;
    }
  });
  let randomIndex = Math.floor(Math.random() * randomPickPool.length);
  let randomCardData = randomPickPool[randomIndex];

  let sortedProjectList = projectData.sort((a, b) => b.priority - a.priority);


  

  //console.log(randomCardData);

  return (
    <div className="App">
      <h1>Evan Overly</h1>
      <h2>Software Design & Development Professional</h2>
      <div id="navbarSupportedContent">
        <div className="navbar navbar-nav">
          <ul>
            <li className='navbar-item'>
              <a className='navbar-link' href="https://www.linkedin.com/in/evan-overly/">Linkedin</a>
            </li>
            <li className='navbar-item'>
              <a className='navbar-link' href="https://uwf.joinhandshake.com/stu/users/23261568">Handshake</a>
            </li>
            <li className='navbar-item'>
              <a className='navbar-link' href="https://github.com/EhoNo1">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <WoodHR />
      <h2>Have tried this?</h2>
      <div className='container'>
        <div className='row'>
          <Card data={randomCardData} />
        </div>
      </div>
      <WoodHR />
      <div id="previous-works">
        <h2>Previous Works</h2>
        <CardGrid data={sortedProjectList} />
      </div>
    </div>
  );
}

export default App;
