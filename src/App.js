import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
// import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import AddFashioner from "./screens/AddFashioner";
import Fashioners from "./screens/Fashioners";

function App() {
  return (
    <main>
      <Header />
      
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/fashioners" component={Fashioners} />
          <Route path="/addfashioner" component={AddFashioner} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterUserScreen} />
        </Switch>
      
    </main>
  );
}

export default App;