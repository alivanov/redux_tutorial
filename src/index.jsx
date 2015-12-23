/**
 * Created by alivanov on 23/12/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import Router, {Route} from 'react-router';
import App from './components/App';
import Results from './components/Results';

require('./style.css');

const routes = <Route component={App}>
  <Route path="/results" component={Results} />
  <Route path="/" component={Voting} />
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
