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
import { Button } from '../../../../common/components/Button';
import { Form } from '../../../Home/components/Board/Input/Form';
import { Redact2 } from './RedactTitle';
import { requests } from '../../../../api/requests';

export function Card(props :any) : JSX.Element {
  const {
    id, getLists, listId,
  } = props;

  const [title, setTitle] = useState(props.title);

  const useParam = useParams();

  const obj = {
    title: '...',
    description: 'petting process',
    list_id: listId,
  };

  const redactComponent = (newTitle: any) => {
    obj.title = newTitle;

    requests('redactCard')({
      boardId: `${useParam.id}`,
      cardId: id,
      transferredObj: obj,
    });
  };

  const deleteCard = requests('deleteCard');
  const removeCard = () => {
    deleteCard({ boardId: useParam.id, cardId: id });
    getLists();
  };

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

      <Button buttonOnclick={removeCard} classButton="button" name="Видалити" />

    </div>

  );
}
