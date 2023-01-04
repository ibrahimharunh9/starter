

import Home from "./home";
import Navbar from "./navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogDetail";


function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/create">
          <Create/>
          </Route>
          <Route path="/blogs/:id">
          <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
