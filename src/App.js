import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import { AuthProvider } from "./Authentication/Auth";
import PrivateRoute from "./Authentication/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
