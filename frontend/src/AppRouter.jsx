// src/AppRouter.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import EventTablePage from './components/EventTablePage';
import UserTablePage from './components/UserTablePage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={EventTablePage} />
        <Route path="/users" component={UserTablePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
