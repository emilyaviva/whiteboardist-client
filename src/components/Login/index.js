import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useCookie, useMount } from 'react-use';
import { login, logout } from '../../features/auth/authSlice';

const mapState = (state) => ({ auth: state.auth });
const mapDispatch = { login, logout };

const Login = ({ auth, login, logout }) => {
  const [authCookie, updateAuthCookie] = useCookie('auth');
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    login(data);
    reset();
  };

  // useMount(() => {
  //   if (authCookie) jwtLogin(authCookie)
  // })

  // useEffect(() => {
  //   if (authCookie !== auth.token) updateAuthCookie(auth.token)
  // }, [auth.token, authCookie, updateAuthCookie])

  const LoginForm = (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control
        type="text"
        name="username"
        placeholder="Username"
        ref={register}
      />
      <Form.Control
        type="password"
        name="password"
        placeholder="Password"
        ref={register}
      />
      <Button type="submit">Log In</Button>
    </Form>
  );

  const LogoutButton = <Button onClick={logout}>Log Out</Button>;

  return auth.loggedIn ? LogoutButton : LoginForm;
};

export default connect(mapState, mapDispatch)(Login);
