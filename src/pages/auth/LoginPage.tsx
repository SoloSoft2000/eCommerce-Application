import React, {useState} from 'react';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Email from '../../components/forms/Email';
import Password from '../../components/forms/Password';
import SubmitFormButton from '../../components/forms/SubmitFormBtn';
import getCustomers from '../../sdk/getCustomers';

function LoginPage(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    getCustomers(email, password)
      .then((data) => console.log('customers=', data)) //eslint-disable-line
      .catch((err) => console.error(err)); //eslint-disable-line
  };

  const handlePasswordChange = (value: string): void => {
    setPassword(value);
  };

  return (
    <main className="flex justify-center py-16">
      <div className="text-black w-[32rem] max-w-full text-left">
        <Title />
        <SwitchPageLinks pageName="login" />
        <form className="px-2 sm:px-0"  onSubmit={handleSubmit}>
          <div className="mb-12">
            <Email
              onChange = {(e): void => setEmail(e.target.value)}
              value={email}
            />
            <Password onPasswordChange={handlePasswordChange} />
          </div>
          <SubmitFormButton value="Sign in" />
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
