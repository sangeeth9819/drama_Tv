import React, { Component } from 'react';
import { Platform, Alert, ImageBackground, Image ,StatusBar} from 'react-native';
import { View,Text } from 'native-base';
import {NavigationAction,StackActions, NavigationActions} from 'react-navigation'
import styles from '../AuthScreen/AuthScreenStyle'
import BackgroundTimer from 'react-native-background-timer';
export default class App extends Component {
    componentDidMount(){
        this.test()
    }
   
    test(){
       const timeoutId= BackgroundTimer.setTimeout(() => {
       const resetAction=StackActions.reset({
           index:0,
           actions:[
               NavigationActions.navigate({routeName:'ChannelScreen'})
           ],
           

});
this.props.navigation.dispatch(resetAction);


        },3000);
    }
    render() {
        return (

            <View>
             <View>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
                    <Image
                        style={  styles.backgroundImage}
                        source={require
                            (
                                '../../assest/original.png'
                            )}
                    >

                    </Image>
                  
                    
                </View>
               
            </View>






        );
    }
}