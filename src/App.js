import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

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

const Product = () => {
  return(
    <>
      Products!!!
    </>
  )
}

const Customer = () => {
  return(
    <>
      Customers!!!
    </>
  )
}

const Employee = () => {
  return(
    <>
      Employees!!!
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
  { id: 1, text: 'Dashboard', icon: 'chart', route: 'dash' },
  { id: 2, text: 'Products', icon: 'product', route: 'product' },
  { id: 3, text: 'Customers', icon: 'group', route: 'customer' },
  { id: 4, text: 'Employees', icon: 'card', route: 'employee' },
  { id: 5, text: 'About', icon: 'about', route: 'about' },
];

const MainMenu = (props) => {
  return(
    <>
      <TreeView dataSource={navigation} onItemClick={ (e) => console.log(props) } />
      {/* <TreeView dataSource={navigation} onItemClick={ (e) => props.history.push(`/${e.itemData.route}`) } /> */}
    </>
  )
}

const App = (props) => {
  const [opened, setOpened] = useState(true);

  const history = createBrowserHistory();
  console.log(history);

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
        <Router history={history}>
          <Switch>
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/dash" component={Dashboard} />
            <Route path="/product" component={Product} />
            <Route path="/customer" component={Customer} />
            <Route path="/employee" component={Employee} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </Drawer>
    </div>
  );
}

export default App;