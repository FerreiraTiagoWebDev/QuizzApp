import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Play from "./components/play/Play";
import Mode from "./components/mode/Mode";
import Settings from "./components/settings/Settings";
import Resources from "./components/resources/Resources";
import Challenge from "./components/challenge/Challenge";
import Materials from "./components/materials/Materials";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="container appContainer">
              <div className="menu">
                <div className="play">
                  <Link to="/play">Play</Link>
                </div>
                <div className="mode">
                  <Link to="/mode">Mode</Link>
                </div>
                <div className="settings">
                  <Link to="/settings">Settings</Link>
                </div>
                <div className="resources">
                  <Link to="/resources">Resources</Link>
                </div>
                <div className="challenge">
                  <Link to="/challenge">Challenge</Link>
                </div>
                <div className="materials">
                  <Link to="/materials">Materials</Link>{" "}
                </div>
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
