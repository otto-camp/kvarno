import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type ButtonContextProp = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
  textSize: number;
  setTextSize: Dispatch<SetStateAction<number>>;
  border: boolean;
  setBorder: Dispatch<SetStateAction<boolean>>;
  borderColor: string;
  setBorderColor: Dispatch<SetStateAction<string>>;
  borderWidth: number;
  setBorderWidth: Dispatch<SetStateAction<number>>;
  borderRadius: number;
  setBorderRadius: Dispatch<SetStateAction<number>>;
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
};

export const ButtonContext = createContext<ButtonContextProp>({
  text: 'Write Something',
  setText: () => {},
  textColor: '#FFFFFF',
  setTextColor: () => {},
  textSize: 16,
  setTextSize: () => {},
  border: true,
  setBorder: () => {},
  borderColor: '#000000',
  setBorderColor: () => {},
  borderWidth: 0,
  setBorderWidth: () => {},
  borderRadius: 0,
  setBorderRadius: () => {},
  width: 0,
  setWidth: () => {},
  height: 0,
  setHeight: () => {},
  bgColor: '',
  setBgColor: () => {},
});

export const useButtonContext = () => useContext(ButtonContext);
