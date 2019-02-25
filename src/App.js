import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Switch, withRouter, Link } from 'react-router-dom';
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
  const handleOnItemClick = (e) => {
    console.log(props);
    console.log(e);

    const url = `/${e.itemData.route}`;
    console.log(url);

    props.history.push(url);
  }

  return(
    <>
      <TreeView id={'treeViewMainMenu'} keyExpr={'id'} parentIdExpr={'parentId'} dataSource={navigation} onItemClick={handleOnItemClick} />
    </>
  )
}

const MainMenuWithRouter = withRouter(MainMenu);
const DrawerWithRouter = withRouter(Drawer);

const App = (props) => {
  const [opened, setOpened] = useState(true);

  // console.log(props);
  // const history = createBrowserHistory();
  // console.log(history);

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
      <BrowserRouter>
        <DrawerWithRouter opened={opened} component={MainMenuWithRouter} >
          <Switch>
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/dash" component={Dashboard} />
            <Route path="/product" component={Product} />
            <Route path="/customer" component={Customer} />
            <Route path="/employee" component={Employee} />
            <Route path="/about" component={About} />
          </Switch>
        </DrawerWithRouter>
      </BrowserRouter>
    </div>
  )
}

export default App;