/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthScreen from './component/src/AuthScreen/AuthScreen'

AppRegistry.registerComponent(appName, () => AuthScreen);
