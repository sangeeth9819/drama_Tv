/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthScreen from './component/src/AuthScreen/AuthScreen'
import ChannelScreen from './component/src/ChannelScreen/ChannelScreen'
import bgMessaging from '../drama_Tv/bgMessaging';

import Orientation from 'react-native-orientation-locker';

console.disableYellowBox=true
AppRegistry.registerComponent(appName, () => App);

  Orientation.lockToPortrait();

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging); //