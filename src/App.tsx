import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './assets/stylesheets/App.scss';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import OnNavigate from './components/OnNavigate';
import HamburgerMenu from './components/HamburgerMenu';
import routes from './routes';
import MetaTags from './components/MetaTags';
import NoticePopup from './containers/NoticePopup.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <OnNavigate />
      <MetaTags />
      <div className="app">
        <Switch>
          <Route path="/apply" exact component={undefined} />
          <Route component={AppBar} />
        </Switch>
        <Switch>
          {
            routes.map((item, key) => {
              return <Route key={key} path={item.path} exact={item.exact} component={item.component} />
            })
          }
          <Redirect to="/404" />
        </Switch>
        <Switch>
          <Route path="/" exact component={undefined} />
          <Route path="/apply" exact component={undefined} />
          <Route component={Footer} />
        </Switch>
      </div>
      <HamburgerMenu />
      <NoticePopup />
    </Router>
  );
}

export default App;
