import './App.css';
import Login from './components/login/login'
import Home from './components/home/home'
import PrivateRoute from './components/helpers/privateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  if (window.location.hash && !localStorage.getItem("token")) {
    sessionStorage.setItem("token", window.location.hash.split("&")[0].split("=")[1])
    window.location.href = `http://localhost:3000/`
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/" component={Home} ></PrivateRoute>
      </Switch>
    </Router>

  );

}
export default App;
