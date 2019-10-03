import React, { Component } from 'react';
import { Image, TouchableOpacity, ImageBackground, StatusBar, View, Alert, AsyncStorage, Vibration, PixelRatio,Navigator } from 'react-native';
import {
    Item,
    Input,
    Text,
    Header,
    Left,
    Right,
    Drawer,
    Fab,
    Button,
    Picker,
    Icon,
} from 'native-base';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Animated from 'react-native-reanimated';
import SideBar from '../SideMenuscreen/SideMenuScreen';
import episode from '../EpisodeScreen/EpisodeScreen';
import play from '../PlayScreen/PlayScreen';
import Swipeable from 'react-native-gesture-handler/Swipeable';


export default class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };

    }

    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
       
        this.drawer._root.open()
    };


    onClose = () => {
        this.setState({
            showTheThing: true
        })
    }


   

    render() {


        return (

            <Drawer
                 side="left" ref={(ref) => { this.drawer = ref; }}
                 acceptPan={true}
                 panOpenMask={1}
                 
                content={<SideBar navigation={this.props.navigation} />}
                onClose={() => this.closeDrawer()}
            
              

                tweenHandler={(ratio) => ({
                    main: { opacity: (1 - ratio) / 1 }
                })}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
               
                <View>
                
                    <Button


                        onPress={() => this.openDrawer()}
                        style={{ top:30}}
                    ></Button>
                    
                    
                </View>
               
            </Drawer>

        );
    }
}

