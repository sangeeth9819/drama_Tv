import React, { Component } from 'react';
 
import { Image } from 'react-native';
 
import { View, Text } from 'native-base';
 
import { StackActions, NavigationActions } from 'react-navigation'
 
import BackgroundTimer from 'react-native-background-timer';
 
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // animating: false,
      align: 'center',
      // alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function () {
          this.setState({
            // alignsecond: true,
          });
        }),
      1000
    );
  }
  componentDidMount() {
    this.test()
  }
 
  test() {
    const timeoutId = BackgroundTimer.setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'ChannelScreen' })
        ],
 
      });
      this.props.navigation.dispatch(resetAction);
 
    }, 2000);
  }
  render() {
    return (
 
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: "center",
          alignContent:"center",
          marginHorizontal: 110,
        }}
      >
        <Image
          source={require
            (
              '../../assest/original.png'
            )}
          style={{
            height: 100,
            width: 150,
          }}
        />
        
       
      </View>






        );
    }
}

