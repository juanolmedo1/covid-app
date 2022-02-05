import React, { FC, useContext, useState } from 'react';
import { View } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { signIn } from '@services/google';
import { store } from '@store/index';
import { setAuthUser } from '@store/actions';
import { IAppContextWithDispatch } from '@store/types';
import { Input } from '@components/Input';
import { Divider } from '@components/Divider';
import { Button } from '@components/Button';
import styles from './styles';
import { TextCA } from '@components/TextCA';

export const Login: FC = (): JSX.Element => {
  const globalState = useContext(store) as IAppContextWithDispatch;
  const { dispatch } = globalState;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const data = await signIn();
    dispatch(setAuthUser(data));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextCA style={styles.text}>CovidApp</TextCA>
      </View>
      <View style={styles.buttonsContainer}>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.loginContainer}>
          <Button title="Login" type="primary" onPress={() => null} />
          <Button title="Register" type="secondary" onPress={() => null} />
        </View>
        <Divider />
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={login}
          disabled={false}
        />
        <View style={styles.forgotContainer}>
          <Button
            title="Forgot your password?"
            type="secondary"
            onPress={() => null}
          />
        </View>
      </View>
    </View>
  );
};
