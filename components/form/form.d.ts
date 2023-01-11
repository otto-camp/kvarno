import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface InputProps extends Partial<HTMLInputElement> {
  val: string;
  setVal: Dispatch<SetStateAction<string>>;
  label: string;
  tooltip?: boolean;
  bordered?: boolean;
}

export interface NumberInputProps extends Partial<HTMLInputElement> {
  setVal: Dispatch<SetStateAction<string>>;
  label: string;
  tooltip?: boolean;
  bordered?: boolean;
}

export interface FileInputProps extends Partial<HTMLInputElement> {
  val: File | null;
  setVal: Dispatch<SetStateAction<File | null>>;
  label: string;
  tooltip?: boolean;
  bordered?: boolean;
}

export interface TextAreaProps extends Partial<HTMLTextAreaElement> {
  setVal: Dispatch<SetStateAction<string>>;
  label: string;
  tooltip?: boolean;
  bordered?: boolean;
}

export interface SelectProps extends Partial<HTMLSelectElement> {
  label: string;
  val: string;
  setVal: Dispatch<SetStateAction<string>>;
  options: string[];
}
