import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn  from '../views/login';
import { Home } from '../views/home';
import { NavBar } from '../components/tabBar';
import Details from '../views/details';
import { PrivateRoute } from './PrivateRoute';
import Favorite from '../views/favorite';




function AppRouter() {
  return (  
  <Router>
    <NavBar/>
    <Switch> 
      <Route exact path="/" component={Home} />      
      <Route exact path="/login" component={LogIn} />      
      <Route exact path="/pokemon/:details" component={Details} />
      <Route exact path="/favorite" component={Favorite} />  
    </Switch>
 </Router>
    
  );
}

export default AppRouter;