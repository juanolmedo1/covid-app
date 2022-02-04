import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

export const signIn = async (): Promise<User | null> => {
  let user = null;
  try {
    user = await GoogleSignin.signIn();
  } catch (error) {
    console.debug(error);
  }
  return user;
};

export const signOut = async (): Promise<void> => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.debug(error);
  }
};

export const isSignedIn = async (): Promise<boolean> => {
  return GoogleSignin.isSignedIn();
};

export const getCurrentUser = async (): Promise<User | null> => {
  let user: User | null = null;
  try {
    user = await GoogleSignin.signInSilently();
  } catch (error) {
    console.debug(error);
  }
  return user;
};
