import React from 'react';
import './card.scss';

export function Card({ title } :{ title: string }) : JSX.Element {
  return (<li className="card">{title}</li>);
}
