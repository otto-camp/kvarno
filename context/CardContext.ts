import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type CardContext = {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
  border: number;
  setBorder: Dispatch<SetStateAction<number>>;
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
  borderColor: string;
  setBorderColor: Dispatch<SetStateAction<string>>;
};

export const CardContext = createContext<CardContext>({
  width: 0,
  setWidth: () => {},
  height: 0,
  setHeight: () => {},
  bgColor: '#000000',
  setBgColor: () => {},
  border: 0,
  setBorder: () => {},
  radius: 0,
  setRadius: () => {},
  borderColor: '#000000',
  setBorderColor: () => {},
});

export const useCardContext = () => useContext(CardContext);
