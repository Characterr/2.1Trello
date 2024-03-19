import React from 'react';
import './board.scss';

interface BoardHomeProps {
  title: string,
  background:string
}
export function Board(prop:BoardHomeProps): JSX.Element {
  const { title, background } = prop;
  return (
    <div className="home-board" style={{ backgroundColor: background }}>
      <h3>
        {title}
      </h3>
    </div>
  );
}
