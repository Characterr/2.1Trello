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
import { DataVerification } from '../../../Home/components/Board/Input/DataVerification';

export function Board(): JSX.Element {
  const { id } = useParams();
  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState();
  const [bgBoard, setBgBoard] = useState();

  const getBoard = requests('getBoard');

  const getLists = async () => {
    let boardData:any = await getBoard({ boardId: id });

    setBgBoard(boardData.custom.background);
    setTitle(boardData.title);
    setLists(await boardData.lists);
  };

  useEffect(() => {
    getLists();
  }, []);

  const createList = requests('createList');
  async function addList(newTitle: string) {
    if (!DataVerification(newTitle)) return;

    let obj = {
      title: newTitle,
      position: 3,
    };
    await createList({ boardId: id, transferredObj: obj });
    getLists();
  }

  const deleteList = requests('deleteList');
  async function removeList(listId:any) {
    await deleteList({ boardId: id, listId });
    getLists();
  }

  const redactBoard = requests('redactBoard');
  async function backgroundСhange() {
    redactBoard({
      boardId: id,
      transferredObj: {
        custom: {
          description: 'desc1',
          background: bgBoard,
        },
      },
    });
    await getLists();
  }

  function setBackgroundColor(e:any) {
    console.log(e.target.value);

    setBgBoard(e.target.value);
  }

  function deleteBoard() {
    requests('deleteBoard')({ boardId: id });
  }

  async function redactTitleBoard(value:any) {
    await redactBoard(
      {
        boardId: id,
        transferredObj: {
          title: value,
        },
      },

    );
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
          <Redact2 title={title} redactElement={redactTitleBoard}>
            <h1>
              {title}

              {` id : ${id}`}

            </h1>
          </Redact2>
          <div className="board-wrap">
            {lists.map((item:any) => <List key={item.id} listId={item.id} title={item.title} cards={item.cards} getLists={getLists} removeList={removeList} setTitle={setTitle} />)}

            <div className="list">
              <Redact2 title="Новий список" redactElement={addList} buttonName="Створити">
                <h2>+ Додати список</h2>
              </Redact2>
            </div>

          </div>

          <NavLink to="/"><Button buttonOnclick={deleteBoard} classButton="button" name="delete board" /></NavLink>
        </div>
      </div>

    </>

  );
}
