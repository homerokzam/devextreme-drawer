import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { Toolbar, Drawer, TreeView } from 'devextreme-react';

const Dashboard = () => {
  return(
    <>
      Dashboard!!!
    </>
  )
}

const About = () => {
  return(
    <>
      ABOUT
    </>
  )
}

const navigation = [
  { id: 1, text: 'Dashboard', icon: 'chart' },
  { id: 2, text: 'About', icon: 'about' },
];

const MainMenu = (props) => {
  return(
    <>
      <TreeView dataSource={navigation} />
    </>
  )
}

const App = () => {
  const [opened, setOpened] = useState(true);

  const toolbarItems = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => setOpened(!opened)
    }
  }];

  return (
    <div className="App">
      <Toolbar items={toolbarItems}></Toolbar>
      <Drawer opened={opened} openedStateMode={'shrink'} position={'left'} component={MainMenu} closeOnOutsideClick={true} >
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/dash" component={Dashboard} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </Drawer>
    </div>
  );
}

export default App;