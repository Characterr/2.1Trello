/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-spacing */
import React, { useEffect, useState } from 'react';
import { Board } from './components/Board/Board';
import './home.scss';
import api from '../../api/request';
import { CreateBoard } from './components/CreateBoard/CreateBoard';

export function Home() :JSX.Element {
  const [boards, setBoards] = useState([]);

  async function getBoards() {
    const data:{ boards:[] } = await api.get('/board');
    console.log(data.boards);
    setBoards(data.boards);
  }

  useEffect(() => { getBoards(); }, []);

  return (
    <div>
      <h1>Мої дошки</h1>
      <div className="boards">
        {boards.map((elem:any) => {
          return (
            <Board fun={setBoards} key={elem.id} id={elem.id.toString()} title={elem.title} background={elem.custom.background} />
          );
        })}
        <CreateBoard setBoards={setBoards} />

      </div>
    </div>
  );
}
