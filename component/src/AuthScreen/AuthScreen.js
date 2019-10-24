import React, { Component } from 'react';
 
import { Image } from 'react-native';
 
import { View, Text } from 'native-base';
 
import { StackActions, NavigationActions } from 'react-navigation'
 
import BackgroundTimer from 'react-native-background-timer';
 
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function () {
          this.setState({
            alignsecond: true,
          });
        }),
      2000
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
 
    }, 3000);
  }
  render() {
    return (
 
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: this.state.align,
          marginHorizontal: 40,
        }}>
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
        
        {!this.state.alignsecond ? null : (
          <View style={{ margin: 10 }}>
            <Text
              style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
              Drama TV
            </Text>
          </View>
        )}
      </View>
 
    );
  }
}