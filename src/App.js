import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Play from "./components/play/Play";
import Mode from "./components/mode/Mode";
import Settings from "./components/settings/Settings";
import Resources from "./components/resources/Resources";
import Challenge from "./components/challenge/Challenge";
import Contact from "./components/contact/Contact";
import Materials from "./components/materials/Materials";
import logo from "./logo.svg";
import "./logo.css";

function App() {
  return (
    <div className="GlobalApp">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <div className="container appContainer">
              <div className="logo">
                <Link to="/">
                  <button className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                  </button>
                </Link>
              </div>
              <div className="menu">
                <Link to="/play">
                  <button className="play btn-grad">Play</button>
                </Link>
                <Link to="/mode">
                  <button className="mode btn-grad">Mode</button>
                </Link>
                <Link to="/settings">
                  <button className="settings btn-grad">Settings</button>
                </Link>
                <Link to="/resources">
                  <button className="resources btn-grad">Resources</button>
                </Link>
                <Link to="/challenge">
                  <button className="challenge btn-grad">Challenge</button>
                </Link>
                <Link to="/materials">
                  <button className="materials btn-grad">Materials</button>
                </Link>
              </div>
            </div>
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/mode">
            <Mode />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/challenge">
            <Challenge />
          </Route>
          <Route path="/materials">
            <Materials />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
