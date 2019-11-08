import React, { Component } from 'react';

import {
    Text, View, Image, TouchableOpacity, Alert, StatusBar, Dimensions, TextInput, ImageBackground, StyleSheet, Button, ButtonGroup
} from 'react-native';

import { Header, Drawer, Left, Icon, Body, Right } from 'native-base';
export default class Request extends Component {
    navigatechannel() {
        this.props.navigation.navigate('ChannelScreen')
    };
    render() {

        return (

            <View style={{ flex: 1, backgroundColor: 'transparent' }}>

                <Header style={{ marginTop: 30, backgroundColor: 'white', borderRadius: 10 }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.navigatechannel()}>

                            <Icon name='md-arrow-back' style={{ color: '#039be5' }} />

                        </TouchableOpacity>

                    </Left>
                    <Body>

                        <Text style={{ textAlign: "center", fontSize: 20, color: 'gray' }}>Request Form</Text>

                    </Body>

                </Header>
                <View style={styles.container}>
                    <View>
                    <Text style={{ fontSize: 15, color: '#424242', width: 320, bottom: 150 }}>
                        Couldn't find your favourite Teledrama ?
                    </Text>
                    <Text style={{ fontSize: 15, color: '#424242', width: 320, bottom: 130 }}>

                        Please send a request us about your favourite show.we'll add it soon.
                    </Text>
                    </View>
                   
                    <Text style={{ fontSize: 25, bottom: 100 }}>
                        Channel
                    </Text>
                    <TextInput placeholder='channel name' style={{ borderBottomColor: 'green', borderBottomWidth: 3, width: 300, bottom: 100 }}>

                    </TextInput >
                    <Text style={{ fontSize: 25, marginTop: 20, bottom: 100 }}>
                        Teledrama
                    </Text>
                    <TextInput placeholder='teledrama name' style={{ borderBottomColor: 'green', borderBottomWidth: 3, width: 300, bottom: 100 }}>

                    </TextInput>
                    <Button
                        title="Request ok"
                        type="outline"
                    />


                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F7F8',


    },
});