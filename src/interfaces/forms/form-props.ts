interface FormProps {
  [key: string]: string;
}

interface ButtonSubmit {
  value: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export { FormProps, ButtonSubmit };
