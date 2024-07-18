/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable func-names */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import './board.scss';
import { NavLink, useParams } from 'react-router-dom';
import api from '../../../../api/request';
import { Form } from './Input/Form';
import { Button } from '../../../../common/components/Button';

interface BoardHomeProps {
  title?: string,
  background?:string,
  id?: string,
  fun:(value: React.SetStateAction<never[]>) => void
  isCreateBord?:boolean
}

export function Board(prop:BoardHomeProps): JSX.Element {
  const { background, id, title } = prop;

  return (
    <NavLink to={`board/${id}`} className="wrapHomeBoard">
      <div
        className="home-board"
        style={{ backgroundColor: background }}
      >
        <h3>{title}</h3>

      </div>
    </NavLink>
  );
}
