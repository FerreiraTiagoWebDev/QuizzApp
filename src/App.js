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
import { useState } from "react";
import axios from "axios";
import Result from "./components/result/Result";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=20${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    setQuestions(data.results);
    setCategory(data.results.category);
    setDifficulty(data.results.difficulty);
  };
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
                <Link to="/mode">
                  <button className="play btn-grad">Play</button>
                </Link>
                {/* <Link to="/mode">
                  <button className="mode btn-grad">Mode</button>
                </Link> */}
                {/* <Link to="/settings">
                  <button className="settings btn-grad">Settings</button>
                </Link>
                <Link to="/resources">
                  <button className="resources btn-grad">Resources</button>
                </Link> */}
                <Link to="/materials">
                  <button className="materials btn-grad">Materials</button>
                </Link>
                <Link to="/contact">
                  <button className="contact btn-grad">Contact</button>
                </Link>
              </div>
            </div>
          </Route>
          <Route path="/play" onClick={fetchQuestions}>
            <Play
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              difficulty={difficulty}
              category={category}
            />
          </Route>
          <Route path="/mode">
            <Mode
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
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
          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
