/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './board.scss';
import { NavLink, useParams } from 'react-router-dom';

interface BoardHomeProps {
  title?: string,
  background?:string,
  id?: string
}

export function Board(prop:BoardHomeProps): JSX.Element {
  const {
    title, background, id,
  } = prop;

  return (

    <NavLink to={`board/${id}`}>
      <div
        className="home-board"
        style={{ backgroundColor: background }}
      >
        <h3>
          {title}
        </h3>
      </div>
    </NavLink>

  );
}
