/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-children-prop */
/* eslint-disable prefer-const */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './card.scss';
import { useParams } from 'react-router-dom';
import api from '../../../../api/request';
import { Button } from '../../../Home/components/Board/Input/Button';
import { Form } from '../../../Home/components/Board/Input/Form';
import { Redact2 } from './RedactTitle';
import { requests } from '../../../../api/requests';

export function Card(props :any) : JSX.Element {
  const {
    id, getLists, listId, // deleteCard
  } = props;

  const [title, setTitle] = useState(props.title);

  const useParam = useParams();

  const obj = {
    title: '...',
    description: 'petting process',
    list_id: listId,
  };

  // function redactComponent(newTitle: any):void {
  //   const url = `/board/${useParams}/card/${id}`;

  //   console.log(url);
  //   (async () => {
  //     await api.put(url, obj);
  //   })();
  // }

  const redactComponent = (newTitle: any) => {
    obj.title = newTitle;

    requests('redactCard')({
      boardId: `${useParam.id}`,
      cardId: id,
      transferredObj: obj,
    });
  };
  const deleteCard = requests('deleteCard');

  return (
    <div>
      <Redact2 redactComponent={redactComponent} title={title} setTitle={setTitle}>
        <li
          className="card"
        >
          {title}
          {id}

        </li>
      </Redact2>

      <Button buttonOnclick={() => { deleteCard({ boardId: useParam.id, cardId: id }); getLists(); }} classButton="button" name="Видалити" />

    </div>

  );
}
