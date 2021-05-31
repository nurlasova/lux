import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Galery from './pages/Galery'
import Contact from './pages/Contact'
import {Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>LOGOTYPE</h1>
      <ul className="list">
                            <li className="list__item"><Link to="/" className="header__link">Home</Link> </li>
                            <li className="list__item"><Link to="/about" className="header__link">About us</Link></li>
                            <li className="list__item"><Link to="/galery" className="header__link">Galery</Link></li>
                            <li className="list__item"><Link to="/contact" className="header__link">Contact-us</Link></li>
                        </ul>
      </header>
      
      <Switch>
        <Route exact path = "/" component ={Home}/>
        <Route  path = "/about" component ={About}/>
        <Route  path = "/galery" component ={Galery}/>
        <Route  path = "/contact" component ={Contact}/>
        </Switch>
      <Home/>
    </div>
  );
}

export default App;
