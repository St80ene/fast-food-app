import './App.scss';
import Layout from './components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import { Home, Contact, Services, Menu, Products } from './pages';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/menu" exact>
          <Menu />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
