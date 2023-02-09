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
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  textSize: number;
  setTextSize: Dispatch<SetStateAction<number>>;
  textWeight: string;
  setTextWeight: Dispatch<SetStateAction<string>>;
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
  textAlign: string;
  setTextAlign: Dispatch<SetStateAction<string>>;
  textDecoration: string;
  setTextDecoration: Dispatch<SetStateAction<string>>;
  textDecorationStyle: string;
  setTextDecorationStyle: Dispatch<SetStateAction<string>>;
  textDecorationColor: string;
  setTextDecorationColor: Dispatch<SetStateAction<string>>;
  textDecorationThickness: number;
  setTextDecorationThickness: Dispatch<SetStateAction<number>>;
  textUnderlineOffset: number;
  setTextUnderlineOffset: Dispatch<SetStateAction<number>>;
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
  text: 'Hello',
  setText: () => {},
  textSize: 24,
  setTextSize: () => {},
  textWeight: '400',
  setTextWeight: () => {},
  textColor: '#FFFFFF',
  setTextColor: () => {},
  textAlign: 'start',
  setTextAlign: () => {},
  textDecoration: 'none',
  setTextDecoration: () => {},
  textDecorationStyle: 'none',
  setTextDecorationStyle: () => {},
  textDecorationColor: '#FFFFFF',
  setTextDecorationColor: () => {},
  textDecorationThickness: 0,
  setTextDecorationThickness: () => {},
  textUnderlineOffset: 0,
  setTextUnderlineOffset: () => {},
});

export const useCardContext = () => useContext(CardContext);
