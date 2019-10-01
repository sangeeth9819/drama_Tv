/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { } from 'react-native'
import authScreen from './component/src/AuthScreen/AuthScreen'
import ChannelScreen from './component/src/ChannelScreen/ChannelScreen'
import TeledramaScreen from './component/src/TeledramaScreen/TeledramaScreen'
import EpisodeScreen from './component/src/EpisodeScreen/EpisodeScreen'
import PlayScreen from './component/src/PlayScreen/PlayScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';

// const RootStack = createStackNavigator({
//   AuthScreen: {
//     screen: authScreen,
//     navigationOptions: { header: null }
//   },
  
// },
// {
//   initialRouteName: 'AuthScreen'
// },
// {
//   headerMode: 'screen'
// },
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends Component {
//   render() {
//     return (
//       < View style={{ flex: 1 }}>

//         <AppContainer />        

//       </View>
//     )
//   }
// }