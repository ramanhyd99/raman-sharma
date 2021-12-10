import logo from './logo.svg';
import './App.css';
import { Tab } from 'bootstrap';
import { Card } from 'reactstrap';
import NavMenu from './NavMenu';
import NavMenuRoute from './NavMenuRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavMenu/>
      </header>
      <br/>
      <NavMenuRoute/>
    </div>
  );
}

export default App;
