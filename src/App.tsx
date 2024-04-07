/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter, NavLink, useParams, useRoutes } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import { Home } from './pages/Home/Home';
import { Board } from './pages/Board/components/Board/Board';
import { Button } from './pages/Board/components/Button/Button';
import api from './api/request';

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
      path: '/2.1Trello',
      Component: Home,
    },
    {
      path: '/main',
      Component: Main,
    },
    {
      path: '/board/:id',
      element: <Board />,
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/board',
      element: <Board />,
    },

  ]);

  return (
    <div>
      {pages}
    </div>
  );
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
