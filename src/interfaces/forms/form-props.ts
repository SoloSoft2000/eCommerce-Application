interface FormProps {
  [key: string]: string;
}

interface ButtonSubmit {
  value: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

interface ValidationFunction {
  required: { value: boolean; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: string) => string | boolean;
}

interface TextFields {
  [key: string]: ValidationFunction;
}

export { FormProps, ButtonSubmit, TextFields };
