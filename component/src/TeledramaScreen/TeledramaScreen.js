import React, { Component } from 'react';
import {
    Text, View, Image, TouchableOpacity, Alert, StatusBar,PixelRatio, Dimensions, TextInput,StyleSheet
} from 'react-native';
import { Header, Drawer, Left,Icon, Body, Right } from 'native-base';

import { FlatGrid } from 'react-native-super-grid';

import SideBar from '../SideMenuscreen/SideMenuScreen';

import Spinner from'react-native-spinkit'

import baseurl from '../../resource/strings'

import styles from './TeledramaScreenStyle';



export default class TeledramaScreen extends Component {
    constructor(props) {



        super(props);
        this.state = {
            videoId: '',
            getall: [],
            currentTime: 0,
            fullscreen: true,
            loading:false,
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 37,
            color: "red",
            isVisible: false,
            playerWidth: Dimensions.get('window').width,




        };
        this.state.videoId = this.props.navigation.state.params.id
       
    }

    componentDidMount() {
        this.getallteledrama()
    }
    getallteledrama() {
        this.setState({
            isVisible:true
        })
        fetch(baseurl.BASE_URL+'/api/teledramas/'+this.state.videoId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((responseJson) => {
                this.setState({
                    isVisible:false
                })
                console.log("Getall :" + JSON.stringify(responseJson))

                this.setState({
                    getall: responseJson
                })
            })

            .catch((error) => {
                this.setState({
                    isVisible:false
                })
                console.error(error);
            });
    }


    
    renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }
    navigateTo_Episode() {
        this.props.navigation.navigate('EpisodeScreen')
    };
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
    navigateToTeledrama(id,imagepath) {
        this.props.navigation.navigate('EpisodeScreen', {
            id: id,
            imagepath:imagepath
        });

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
              
                <View style={styles.wrapper}>
                    <Header style={{
                        backgroundColor: 'white', borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.46,
                        shadowRadius: 11.14,
                        elevation: 17,
                    }}>

                        <Left>
                            <TouchableOpacity onPress={() => this.openDrawer()}>
                                <Icon name='menu' style={{ color: 'gray' }} />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <TextInput
                                style={{
                                    height: 40, width: 200, borderRadius: 10, borderRadius: 20, marginTop: 5
                                }}
                                placeholder='                      Search here' />

                        </Body>
                        <Right>
                            <TouchableOpacity onPress={() => Alert.alert("search workinng")} style={{ marginRight: 10, backgroundColor: 'Black' }} >
                                <Icon name='search' />
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} onPress={() => this.navigateToTeledrama(this.state.videoId)}>
                                <Icon name='ios-disc' style={{ color: '#00cc44', }} >
                                    <Text style={{ fontSize: 14, color: 'black', }} >Live</Text>
                                </Icon>
                            </TouchableOpacity>
                        </Right>

                    </Header>
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                    
                    {/* Body Content */}
                    <FlatGrid
                        itemDimension={270}
                        items={this.state.getall}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this. navigateToTeledrama(item.id , item.te_Image)} activeOpacity={0.8}>
                                <View style={{ borderRadius: 50 }}>
                                    <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>

                                        <Image style={{ height: 150, width: 340, borderRadius: 20 }} source={{ uri: baseurl.BASE_URL + '/images/' + item.te_Image }} >

                                        </Image>
                                        {/* <Text style={styles.itemName} style={{
                                            fontSize: 22,
                                            left: 230,
                                            height: 100,
                                            width: 120,
                                            bottom: 95,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}></Text> */}

                                    </View>
                                </View>

                            </TouchableOpacity>
                        )}
                    />
                        <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={this.state.types[7]} color={this.state.color}/>
                </View>
            </Drawer>

        );
    }
}
