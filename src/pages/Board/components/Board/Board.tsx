/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-names */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { List } from '../List/List';
import './board.scss';
import api from '../../../../api/request';
import { Menu } from '../../../Home/components/Menu/Menu';
import { Home } from '../../../Home/Home';
import { Button } from '../../../Home/components/Board/Input/Button';
import { Redact2 } from '../Card/RedactTitle';
import { requests } from '../../../../api/requests';

export function Board(): JSX.Element {
  const { id } = useParams();

  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState('Моя тестова дошка');
  const [bgBoard, setBgBoard] = useState();

  const getLists = async () => {
    const url = `/board/${id}`;
    const makeRequest = api.get;

    await makeRequest(url);
    // const data:{ boards:[] } = await api.get('/board');
    let boardData :{ lists:[], title:string } = await api.get(url);
    // console.log(boardData.lists);
    setLists(boardData.lists);
    // console.log(lists);
    setTitle(boardData.title);
  };

  // const getBoard = requests('getBoard');
  // const getLists = async () => {
  //   let boardData:{ lists:[], title:string } = await getBoard({ boardId: id });

  //   setLists(boardData.lists);
  //   setTitle(boardData.title);
  // };

  useEffect(() => { getLists(); }, []);
  let url = `board/${id}/list`;

  function addList() {
    (async () => {
      await api.post(url, {
        title: 'карточка6',
        position: 3,
      });
      getLists();
    })();
  }

  function removeList(listId:any) {
    (async () => {
      await api.delete(`/board/${id}/list/${listId}`);
    })();
  }

  function backgroundСhange() {
    // setBgBoard('red');
  }

  function t(e:any) {
    console.log(e.target.value);

    setBgBoard(e.target.value);
  }

  return (
    <>
      <Home />
      <div className="wrap-board">
        <div className="board" style={{ background: bgBoard }}>

          <Button buttonOnclick={backgroundСhange} classButton="button" name="редакт board" />
          <input type="color" defaultValue={bgBoard} onInput={t} />

          <div>{bgBoard}</div>
          <NavLink className="homButtom" to="/"><Button name="🏠 ⇦ Додому" /></NavLink>
          <Redact2 redactComponent={setTitle} title={title} setTitle={setTitle}>
            <h1>
              {title}

              {` id : ${id}`}

            </h1>
          </Redact2>
          <div className="board-wrap">
            {lists.map((item:any) => <List key={item.id} listId={item.id} title={item.title} cards={item.cards} getLists={getLists} removeList={removeList} setTitle={setTitle} />)}
            <Button buttonOnclick={addList} classButton="button" name="+ Добавить список" />
          </div>
        </div>
      </div>

    </>

  );
}
