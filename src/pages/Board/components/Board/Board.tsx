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
import { Button } from '../../../../common/components/Button';
import { Redact2 } from '../Card/RedactTitle';
import { requests } from '../../../../api/requests';

export function Board(): JSX.Element {
  const { id } = useParams();
  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState('Моя тестова дошка');
  const [bgBoard, setBgBoard] = useState();

  const getBoard = requests('getBoard');
  const getLists = async () => {
    let boardData:any = await getBoard({ boardId: id });

    setLists(boardData.lists);
    setTitle(boardData.title);
  };

  useEffect(() => { getLists(); }, []);

  const createList = requests('createList');
  function addList() {
    let obj = {
      title: 'карточка6',
      position: 3,
    };
    createList({ boardId: id, transferredObj: obj });
    getLists();
  }

  const deleteList = requests('deleteList');
  function removeList(listId:any) {
    deleteList({ boardId: id, listId });
    getLists();
  }

  function backgroundСhange() {
    setBgBoard('red' as unknown as undefined);
  }

  function setBackgroundColor(e:any) {
    console.log(e.target.value);

    setBgBoard(e.target.value);
  }

  function deleteBoard() {
    requests('deleteBoard')({ boardId: id });
    getLists();
  }

  return (
    <>
      <Home />
      <div className="wrap-board">
        <div className="board" style={{ background: bgBoard }}>

          <Button buttonOnclick={backgroundСhange} classButton="button" name="редакт board" />
          <input type="color" defaultValue={bgBoard} onInput={setBackgroundColor} />

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

          <Button buttonOnclick={deleteBoard} classButton="button" name="delete board" />
        </div>
      </div>

    </>

  );
}
