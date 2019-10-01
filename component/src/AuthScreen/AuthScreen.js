import React, { Component } from 'react';
import { Platform, Alert, ImageBackground } from 'react-native';
import { } from 'native-base';
import styles from '../AuthScreen/AuthScreenStyle'
export default class App extends Component {
    render () {
        return(
            <ImageBackground
            source={require('../../assest/new.jpg')}
             style={styles.backgroundImage}
             />
            
           
        );
    }
}