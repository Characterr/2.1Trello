/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { ICard } from '../../../../common/interfaces/ICard';
import './list.scss';
import { Card } from '../Card/Card';
import { Button } from '../../../../common/components/Button';
import { useParams, useSearchParams } from 'react-router-dom';
import api from '../../../../api/request';
import { func } from 'prop-types';
import { Redact2 } from '../Card/RedactTitle';
import { requests } from '../../../../api/requests';

export function List(props: any): JSX.Element {
  const { id } = useParams();

  const {
    listId, cards, title, getLists, removeList, setTitle,
  } = props;
  const [listTitle, setListTitle] = useState(title);

  const createCard = requests('createCard');
  function addCard() {
    const obj = {
      title: 'Нова_карта',
      list_id: listId,
      position: 5,
      description: 'washing process',
      custom: {
        deadline: '2022-08-31 12:00',
      },
    };
    createCard({ boardId: id, transferredObj: obj });
    getLists();
  }

  const redactList = requests('redactList');
  function redactComponent(newTitle: any):void {
    const obj = {
      title: newTitle,
      position: 2,
    };
    redactList({ boardId: id, listId, transferredObj: obj });
    getLists();
  }

  return (

    <div className="list">
      <Button buttonOnclick={() => { removeList(listId); }} name="Видалити ліст" />
      <Redact2 redactComponent={redactComponent} setTitle={setListTitle} title={listTitle}>
        <h2>
          {listTitle}
        </h2>
      </Redact2>
      {listId}
      <ul>
        {cards.map((item:any) => <Card key={item.id} title={item.title} id={item.id} getLists={getLists} listId={listId} />)}
      </ul>
      <Button buttonOnclick={addCard} name="+ Додати карточку" />
    </div>

  );
}
