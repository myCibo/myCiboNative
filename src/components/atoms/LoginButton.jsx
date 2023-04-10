import React from 'react';
import { Button } from 'react-native';
import useAuth0 from '../../../useAuth0';

const LoginButton = () => {
  const { name, email, promptAsync } = useAuth0();

  const onPress = async () => {
    try {
      await promptAsync();
    } catch (e) {
      console.log('Login error:', e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
};

export default LoginButton;
