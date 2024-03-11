import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List } from '../List/List';
import './board.scss';
import { Button } from '../Button/Button';

export function Board(): JSX.Element {
  const [title] = useState('Моя тестова дошка');
  const [lists] = useState([
    {
      id: 1,
      title: 'Плани',
      cards: [
        { id: 1, title: 'помити кота' },
        { id: 2, title: 'приготувати суп' },
        { id: 3, title: 'сходити в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процесі',
      cards: [{ id: 4, title: 'подивитися серіал' }],
    },
    {
      id: 3,
      title: 'Зроблено',
      cards: [
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
  ]);

  return (

    <div className="board">
      <NavLink className="homButtom" to="/"><Button title="🏠 ⇦ Додому" /></NavLink>
      <h1>{title}</h1>
      <div className="board-wrap">
        {lists.map((item) => <List key={item.id} title={item.title} cards={item.cards} />)}
        <Button title="+ Добавить список" />
      </div>
    </div>

  );
}
