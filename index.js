import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
