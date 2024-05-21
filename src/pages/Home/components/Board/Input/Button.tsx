/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */

export function Button(props:any):JSX.Element {
  const { buttonOnclick, name, classButton } = props;
  return (
    <button className={classButton} onClick={buttonOnclick}>{name}</button>
  );
}
