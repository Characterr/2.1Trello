/* eslint-disable func-names */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import { Button } from '../../../../common/components/Button';
import { Form } from '../Board/Input/Form';
import api from '../../../../api/request';
import { requests } from '../../../../api/requests';

/* eslint-disable max-len */
export function CreateBoard(props:any):JSX.Element {
  const { updateBoards } = props;
  const [showInput, setShowInput] = useState(false);

  return (
    <div style={{ backgroundColor: '#673' }} className="home-board">
      {showInput
        ? (
          <>
            <Button
              buttonOnclick={():void => { setShowInput(!showInput); }}
              name="Сховати"
            />
            <Form updateBoards={updateBoards} title="" listener={() => {}} withButton withBlur={false} />
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
