import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import CreateTransaction from "./pages/CreateTransaction";
import DeleteTransaction from "./pages/DeleteTransaction";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/createTransaction' component={CreateTransaction}/>
          <Route path='/edit' component={Edit}/>
          <Route path='/deleteTransaction' component={DeleteTransaction}/>
      </Switch>
    </Router>
  );
}

export default App;
