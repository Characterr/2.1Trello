/* eslint-disable prefer-regex-literals */
/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
function getInvalidCharacters(value:string):string[] {
  if (value.trim() === '') {
    alert('Поле вводу пусте');

    return [''];
  } const reg = new RegExp(/^[0-9,a-z,—,.,_,\s,]/i);
  return value.split('').filter((char) => char.search(reg) !== 0);
}

export function DataVerification(value: string):boolean {
  if (value.trim() === '') {
    alert('Введіть дані'); return false;
  }
  const listInvalidCharacters = getInvalidCharacters(value);
  if (listInvalidCharacters.length > 0) {
    alert(`Не допустимі символи : ${listInvalidCharacters}`);
    return false;
  }

  return true;
}
