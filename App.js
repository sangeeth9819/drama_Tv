/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {Navigator,StatusBar} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { View } from 'native-base';
import Auth from './component/src/AuthScreen/AuthScreen';
import Channel from './component/src/ChannelScreen/ChannelScreen';
import Episode from './component/src/EpisodeScreen/EpisodeScreen';
import Teledrama from './component/src/TeledramaScreen/TeledramaScreen';

const RootStack = createStackNavigator({
    AuthScreen: {
    screen: Auth,
    navigationOptions: { header: null }

  },
  // SampleScreen: {
  //   screen: Sample,
  //   navigationOptions: { header: null }

  // },
  ChannelScreen: {
    screen: Channel,
    navigationOptions: { header: null }

  },
  EpisodeScreen: {
    screen:Episode,
    navigationOptions: { header: null }
  },
  // PlayScreen: {
  //   screen: Play,
  //   navigationOptions: { header: null }
  // },
  // SampleScreen: {
  //   screen: SampleMenu,
  //   navigationOptions: { header: null }
  // },
  TeledramaScreen: {
    screen: Teledrama,
    navigationOptions: { header: null }
  },
 

},

  {
    initialRouteName: 'AuthScreen'

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
       <StatusBar barStyle="light-content" hidden={false} backgroundColor="white" translucent={true} />
        
        <AppContainer />
        {/* <FlashMessage position="top" /> */}
      </View>
    );
  }
}