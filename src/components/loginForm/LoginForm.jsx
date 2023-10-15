// LoginForm.jsx
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Form, Label } from './loginForm-style';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <input type="email" name="email"></input>
        </Label>
        <Label>
          Password
          <input type="password" name="password"></input>
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    
  );
};
