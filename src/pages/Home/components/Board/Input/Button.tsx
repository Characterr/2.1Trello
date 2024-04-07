/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */

export function Button(prop:any):JSX.Element {
  const { boardOperation, name } = prop;
  return (
    <button onClick={boardOperation}>{name}</button>
  );
}
