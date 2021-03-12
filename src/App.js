import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EighthPage from './EighthPage';
import FifthPage from './FifthPage';
import FourthPage from './FourthPage';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import SeventhPage from './SeventhPage';
import SixthPage from './SixthPage';
import ThirdPage from './ThirdPage';
import FinalPage from './FinalPage';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/one" exact>
            <HomePage />
          </Route>
          <Route path="/two" exact>
            <SecondPage />
          </Route>
          <Route path="/three" exact>
            <ThirdPage />
          </Route>
          <Route path="/four" exact>
            <FourthPage />
          </Route>
          <Route path="/five" exact>
            <FifthPage />
          </Route>
          <Route path="/six" exact>
            <SixthPage />
          </Route>
          <Route path="/seven" exact>
            <SeventhPage />
          </Route>
          <Route path="/eight" exact>
            <EighthPage />
          </Route>
          <Route path="/final" exact>
            <FinalPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}