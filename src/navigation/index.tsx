import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { Login, ConfirmedCasesFn, Countries } from '@screens/index';
import { colors, fontSizes } from '@utils/styles';
import { ActivityIndicator, View } from 'react-native';
import { getCurrentUser, isSignedIn } from '@services/google';
import { store } from '@store/index';
import { setAuthUser } from '@store/actions';
import styles from './styles';
import { IAppContextWithDispatch } from '@store/types';

type HomeStackParamList = {
  Countries: undefined;
  ConfirmedCases: { country: string; slug: string; id: string };
};

export type ConfirmedCasesProps = StackScreenProps<
  HomeStackParamList,
  'ConfirmedCases'
>;

export type CountriesProps = StackScreenProps<HomeStackParamList, 'Countries'>;

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackComponent = (): JSX.Element => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blue,
          height: 100,
          shadowColor: 'transparent',
        },
        headerBackTitleVisible: false,
        headerTintColor: colors.white,
        headerTitleStyle: {
          color: colors.white,
          fontSize: fontSizes.L,
        },
      }}>
      <HomeStack.Screen
        name="Countries"
        component={Countries}
        options={{ title: 'Countries' }}
      />
      <HomeStack.Screen
        name="ConfirmedCases"
        component={ConfirmedCasesFn}
        options={({ route }) => ({ title: route.params.country })}
      />
    </HomeStack.Navigator>
  );
};

const RootStack = createStackNavigator();

export const RootNavigator = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const globalState = useContext(store) as IAppContextWithDispatch;
  const { auth, dispatch } = globalState;

  useEffect(() => {
    const checkUserStatus = async () => {
      // Check if user is logged in
      const userLogged = await isSignedIn();
      if (userLogged && !auth) {
        // Get logged user from Google Signin library
        const user = await getCurrentUser();
        // Store user in Context
        dispatch(setAuthUser(user));
      }
      // Update states
      setIsLoggedIn(userLogged);
      setLoading(false);
    };

    checkUserStatus();
  }, [dispatch, auth]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {!isLoggedIn ? (
          <RootStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, animationTypeForReplace: 'pop' }}
          />
        ) : (
          <RootStack.Screen
            name="Home"
            component={HomeStackComponent}
            options={{ headerShown: false }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
