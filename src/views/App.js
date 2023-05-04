import "./App.scss";
import MyComponent from "./Example/MyComponent.js";
import ShowName from "./Props/ShowName.js";
import Nav from "./Nav/Nav.jsx";
import Home from "./Example/Home";
import About from "./Example/About";
import ListUser from "./Users/ListUser.js";
import DetailUser from "./Users/DetailUser.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const  App = () =>  {
  return (
    <BrowserRouter>
      <div>
        <Nav />

        <Switch>
          <div className="App">
            <header className="App-header">
              <Route path="/Home" exact>
                <Home />
              </Route>

              <Route path="/Todo">
                <MyComponent />
              </Route>

              <Route path="/About">
                <About></About>
              </Route>
              <Route path="/User" exact>
                <ListUser></ListUser>
              </Route>
              <Route path="/User/:id">
                <DetailUser></DetailUser>
              </Route>
            </header>{" "}
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
