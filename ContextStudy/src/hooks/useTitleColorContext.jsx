import {  useContext } from 'react';
import { TitleColorContext } from '../context/TitleColorContext';

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);
  if (!context) {
    console.log('COntexto não encontrado');
  }
  return context;
};
