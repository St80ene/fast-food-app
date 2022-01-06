import './App.scss';
import Layout from './components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/signUp" exact>
          <SignUp/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
