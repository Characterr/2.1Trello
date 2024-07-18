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
import api from './api/request';
import { Button } from './common/components/Button';
import { Card } from './pages/Board/components/Card/Card';

function MyRoutes(): JSX.Element {
  const pages = useRoutes([
    {
      path: '/',
      Component: Home,
    },

    {
      path: '/board/:id',
      element: <Board />,
    },

  ]);

  return (
    <div className="main">
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
