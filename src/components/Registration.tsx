import './Registration.css';
import { useState } from 'react';

interface UserProps {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface ErrosProps {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm: string;
}

export const Registration = () => {
  const [user, setUser] = useState<UserProps>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [errors, setErrors] = useState<ErrosProps>({
    passwordConfirm: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.password !== user.passwordConfirm) {
      setErrors({ ...errors, passwordConfirm: 'Hesla se neshoduji.' });
      return;
    }
    //console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === 'email' &&
      user.username === '' &&
      user.email.includes('@')
    ) {
      const userName = e.target.value.split('@')[0];
      setUser({ ...user, username: userName, email: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

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
        </label>
        <label>
          <p>User Name</p>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Confirm password</p>
          <input
            type="password"
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={handleChange}
          />
          {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
        </label>
        <button className="btn_register" type="submit">
          Register
        </button>
      </form>
    </>
  );
};
