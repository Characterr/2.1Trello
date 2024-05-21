/* eslint-disable func-names */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import { Button } from '../Board/Input/Button';
import { Form } from '../Board/Input/Form';
import api from '../../../../api/request';

/* eslint-disable max-len */
export function CreateBoard(props:any):JSX.Element {
  const { setBoards } = props;
  const [showInput, setShowInput] = useState(false);

  async function boardOperation(operation:string, obj?:{ title: string, custom: any }, id?:number) {
    let url; let makeRequest;

    switch (operation) {
      case 'delete': {
        url = `/board/${id}`;
        makeRequest = api.delete;
        break;
      }
      case 'post': {
        makeRequest = api.post;
        url = '/board';
        break;
      }
      case 'put': {
        makeRequest = api.put;
        url = `/board/${id}`;
        break;
      }
      default: {
        makeRequest = api.get;
        url = '/board';
      }
    }

    (async function () {
      await makeRequest(url, obj);
      const data:{ boards:[] } = await api.get('/board');
      props.setBoards(data.boards);
    }());
  }

  return (
    <div style={{ backgroundColor: '#673' }} className="home-board">
      {showInput
        ? (
          <>
            <Button
              buttonOnclick={():void => { setShowInput(!showInput); }}
              name="Сховати"
            />
            <Form boardOperation={boardOperation} method="post" title="" listener={() => {}} withButton withBlur={false} />
          </>
        )
        : (
          <Button
            buttonOnclick={():void => { setShowInput(!showInput); }}
            name="+ Створити дошку"
          />
        ) }

    </div>
  );
}
