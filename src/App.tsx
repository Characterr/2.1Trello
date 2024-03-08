import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter, NavLink, useRoutes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Page1(): JSX.Element {
  return <div>this is page1</div>;
}
function Page2(): JSX.Element {
  return <div>this is page22</div>;
}

function M(): JSX.Element {
  const pages = useRoutes([
    {
      path: '/page1',
      element: <Page1 />,
    },
    {
      path: '/page2',
      Component: Page2,
    },
  ]);

  return <div>{pages}</div>;
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <M />
        <NavLink to="/page1">link1</NavLink>
        <NavLink to="/page2">link2</NavLink>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.tsx</code>
            and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
