import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingPage';
import Guru from './guru';
import News from './news';
import Shop from './shop';
import Events from './events';
import SignUp from './components/SignUp'

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Guru" component={Guru} />
    <Route path="/News" component={News} />
    <Route path="/Shop" component={Shop} />
    <Route path="/Events" component={Events} />
    <Route path="/SignUp" component={SignUp} />
  </Switch>
)

export default Main;