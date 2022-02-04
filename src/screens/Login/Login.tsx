import React, { FC, useContext } from 'react';
import { View, Text } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { signIn } from '@services/google';
import { store } from '@store/index';
import { setAuthUser } from '@store/actions';
import { IAppContextWithDispatch } from '@store/types';
import styles from './styles';

export const Login: FC = (): JSX.Element => {
  const globalState = useContext(store) as IAppContextWithDispatch;
  const { dispatch } = globalState;

  const login = async () => {
    const data = await signIn();
    dispatch(setAuthUser(data));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Covid App</Text>
      <GoogleSigninButton
        // style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={login}
        disabled={false}
      />
    </View>
  );
};
