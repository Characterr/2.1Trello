/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-spacing */
import React, { useState } from 'react';
import { Board } from './components/Board/Board';
import './home.scss';

export function Home(): JSX.Element {
  const [boards] = useState([
    { id: 1, title: 'покупки', custom: { background: 'red' } },
    { id: 2, title: 'підготовка до весілля', custom: { background: 'green' } },
    { id: 3, title: 'розробка інтернет-магазину', custom: { background: 'blue' } },
    { id: 4, title: 'курс по просуванню у соцмережах', custom: { background: 'grey' } },
  ]);

  return (
    <div>
      <h1>Мої дошки</h1>
      <div className="boards">
        {boards.map((elem) => {
          return (
            <Board key={elem.id} title={elem.title} background={elem.custom.background} />
          );
        })}
        <Board title=" + Створити дошку" background="lightgrey" />
      </div>
    </div>
  );
}
