/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {Navigator} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { View } from 'native-base';
import Auth from './component/src/AuthScreen/AuthScreen';
import Channel from './component/src/ChannelScreen/ChannelScreen';
import Episode from './component/src/EpisodeScreen/EpisodeScreen';
import Play from './component/src/PlayScreen/PlayScreen';
import SideMenu from './component/src/SideMenuscreen/SideMenuScreen';
import Teledrama from './component/src/TeledramaScreen/TeledramaScreen';






const RootStack = createStackNavigator({
    AuthScreen: {
    screen: Auth,
    navigationOptions: { header: null }

  },
  ChannelScreen: {
    screen: Channel,
    navigationOptions: { header: null }

  },
  EpisodeScreen: {
    screen:Episode,
    navigationOptions: { header: null }
  },
//   PlayScreen: {
//     screen: Play,
//     navigationOptions: { header: null }
//   },
//   SideMenuScreen: {
//     screen: SideMenu,
//     navigationOptions: { header: null }
//   },
  TeledramaScreen: {
    screen: Teledrama,
    navigationOptions: { header: null }
  },

},

  {
    initialRouteName: 'ChannelScreen'
// ab6bc4954980e8cd9e2faf3b79edbeee73078
  },
  {
    headerMode: 'screen'
  },
);

const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
    
        
        <AppContainer />
        {/* <FlashMessage position="top" /> */}
      </View>
    );
  }
}