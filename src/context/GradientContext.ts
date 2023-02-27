import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type GradientContext = {
  firstColor: string;
  setFirstColor: Dispatch<SetStateAction<string>>;
  secondColor: string;
  setSecondColor: Dispatch<SetStateAction<string>>;
  firstColorPosition: number;
  setFirstColorPosition: Dispatch<SetStateAction<number>>;
  secondColorPosition: number;
  setSecondColorPosition: Dispatch<SetStateAction<number>>;
  degree: number | string;
  setDegree: Dispatch<SetStateAction<number | string>>;
};

export const GradientContext = createContext<GradientContext>({
  firstColor: '#ffffff',
  setFirstColor: () => {},
  secondColor: '#000000',
  setSecondColor: () => {},
  firstColorPosition: 0,
  setFirstColorPosition: () => {},
  secondColorPosition: 100,
  setSecondColorPosition: () => {},
  degree: 90,
  setDegree: () => {},
});

export const useGradientContext = () => useContext(GradientContext);
