import React, { Component } from 'react';
import { Platform, Alert, ImageBackground, Image ,StatusBar} from 'react-native';
import { View,Text } from 'native-base';
import styles from '../AuthScreen/AuthScreenStyle'
export default class App extends Component {
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