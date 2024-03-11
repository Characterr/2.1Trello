import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter, NavLink, useRoutes } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import { Board } from './pages/Board/components/Board/Board';
import { Button } from './pages/Board/components/Button/Button';

function Main(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/board">
          <Button title="to board" />
        </NavLink>

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
  );
}

function MyRoutes(): JSX.Element {
  const pages = useRoutes([
    {
      path: '/',
      Component: Main,
    },
    {
      path: '/board',
      element: <Board />,
    },
  ]);

  return <div>{pages}</div>;
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
