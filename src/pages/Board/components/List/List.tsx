import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';
import './list.scss';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

export function List({ cards, title }: { cards: ICard[], title:string }): JSX.Element {
  return (
    <div className="list">
      <h2>{title}</h2>
      <ul>
        {cards.map((item) => <Card key={item.id} title={item.title} />)}
      </ul>
      <Button title="+ Додати карточку" />
    </div>
  );
}
