// LoginForm.jsx
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispach = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispach(
      logIn({
        email: form.element.email.value,
        password: form.element.password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Email
          <input type="email" name="email"></input>
        </label>
        <label>
          {' '}
          Password
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
