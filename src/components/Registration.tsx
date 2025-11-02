import './Registration.css';
import { useState } from 'react';

interface User {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface Error {
  usernameCheck: boolean;
  emailCheck: boolean;
  passwordCheck: boolean;
  passwordConfirmCheck: boolean;
}

export const Registration = () => {
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [errors, setErrors] = useState<Error>({
    usernameCheck: false,
    emailCheck: false,
    passwordCheck: false,
    passwordConfirmCheck: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      usernameCheck: user.username === '',
      emailCheck: user.email === '',
      passwordCheck: user.password === '',
      passwordConfirmCheck: user.password !== user.passwordConfirm,
    };
    setErrors(newErrors);
    console.log(user);
  };

  const validateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === 'email' &&
      ///user.username === '' &&
      user.email.includes('@')
    ) {
      const userName = e.target.value.split('@')[0];
      setUser({ ...user, username: userName, email: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateUserName(e);
  }
  return (
    <>
      <h2>Registration2</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {errors.emailCheck && <p>Nemate vyplneny email</p>}
        </label>
        <label>
          <p>User Name</p>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          {errors.usernameCheck && <p>Nemate vyplnene uzivatelske jmeno</p>}
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {errors.passwordCheck && <p>Nemate vyplneny heslo</p>}
        </label>
        <label>
          <p>Confirm password</p>
          <input
            type="password"
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={handleChange}
          />
          {errors.passwordConfirmCheck && <p>Hesla se neshoduji</p>}
        </label>
        <button className="btn_register" type="submit">
          Register
        </button>
      </form>
    </>
  );
};
