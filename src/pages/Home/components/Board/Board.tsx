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
import { Button } from './Input/Button';

interface BoardHomeProps {
  title?: string,
  background?:string,
  id?: string,
  fun:(value: React.SetStateAction<never[]>) => void
  isCreateBord?:boolean
}

export function Board(prop:BoardHomeProps, children: any): JSX.Element {
  const {
    background, id, fun, isCreateBord,
  } = prop;

  let [state, setState] = useState({ title: prop.title || '', showEdit: true });
  let { title } = state;

  async function boardOperation(operation:string, obj?:{ title: string, custom: any }) {
    let url; let makeRequest;

    switch (operation) {
      case 'delete': {
        url = `/board/${id}`;
        makeRequest = api.delete;
        break;
      }
      case 'post': {
        makeRequest = api.post;
        url = '/board';
        break;
      }
      case 'put': {
        makeRequest = api.put;
        url = `/board/${id}`;
        break;
      }
      default: {
        makeRequest = api.get;
        url = '/board';
      }
    }

    (async function () {
      await makeRequest(url, obj);
      const data:{ boards:[] } = await api.get('/board');
      prop.fun(data.boards);
    }());
  }

  const togleShowInput = (e:any) => {
    let { value } = e.currentTarget;
    setState({ ...state, showEdit: true, title: value });
  };

  return (
    <NavLink to={`board/${id}`}>
      <div
        className="home-board"
        style={{ backgroundColor: background }}
      >
        <Button buttonOnclick={() => { boardOperation('delete'); }} name="x" />
        {!isCreateBord ? <h3 onClick={() => { setState({ ...state, showEdit: false }); }}>{title}</h3>
          : <Form title={title} boardOperation={boardOperation} method="put" listener={togleShowInput} withButton={false} withBlur />}

      </div>
    </NavLink>
  );
}
