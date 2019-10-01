import React, { Component } from 'react';
import { Platform, Alert, ImageBackground } from 'react-native';
import { } from 'native-base';
import styles from '../AuthScreen/AuthScreenStyle'
// import styles from './HomeScreen.Style'
// import Card from '../../components/base/Card';
// import Button from '../../components/base/Button'
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