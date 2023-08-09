interface FormProps {
  [key: string]: string;
}

interface ButtonSubmit {
  value: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

interface EmailProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PasswordProps {
  onPasswordChange: (value: string) => void;
}

export { FormProps, ButtonSubmit, EmailProps, PasswordProps };
