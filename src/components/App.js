import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GymnasiumList from './components/GymnasiumList';
import MemberList from './components/MemberList';
import SessionList from './components/SessionList';
import CoachList from './components/CoachList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/gymnasiums">Gymnasiums</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/sessions">Sessions</Link>
            </li>
            <li>
              <Link to="/coaches">Coaches</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route path="/gymnasiums">
            <GymnasiumList />
          </Route>
          <Route path="/members">
            <MemberList />
          </Route>
          <Route path="/sessions">
            <SessionList />
          </Route>
          <Route path="/coaches">
            <CoachList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
