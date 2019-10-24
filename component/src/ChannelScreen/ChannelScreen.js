
import React, { Component } from 'react';

import {
    StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar,
    Dimensions, TextInput
} from 'react-native';
import { Header, Drawer, Left, Button, Icon, Body, Right } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';

import SideBar from '../SideMenuscreen/SideMenuScreen';
// import Spinner from 'react-native-loading-spinner-overlay';
import baseurl from '../../resource/strings'
import Spinner from'react-native-spinkit'

const numColumns = 3;

export default class Channel extends Component {




    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <View
                style={styles.item}
            >
                <Text style={styles.itemText}>{item.key}</Text>
            </View>
        );
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            swipeToClose: true,
            videoId: '',
            isReady: false,
            status: null,
            quality: null,
            error: null,
            isPlaying: true,
            isLooping: true,
            duration: 0,
            currentTime: 0,
            fullscreen: true,
            loading: false,
            getall: [],
            playerWidth: Dimensions.get('window').width,
            index: 0,
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 37,
            color: "red",
            isVisible: false
        };

    }
    componentDidMount() {
        this.getAll()
    }

    getAll() {
        this.setState({
            isVisible: true
        })
        console.log('text');
        fetch(baseurl.BASE_URL + '/api/channels', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then((resp) => resp.json())
            .then((responseJson) => {
                this.setState({
                    isVisible: false
                })
                console.log("getAll :" + JSON.stringify(responseJson[0].ch_Image))
                this.setState({
                    getall: responseJson
                })

            })
            .catch((error) => {
                this.setState({
                    isVisible: false
                })
                console.error(error);
            });


    }

    navigatechannel() {
        this.props.navigation.navigate('TeledramaScreen')
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

    Test() {
        Alert.alert("Alert Is Working...")
    }
    navigateToTeledrama(id) {
        this.props.navigation.navigate('TeledramaScreen', {

            id: id
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

                    <Header style={{ marginTop: 5, backgroundColor: 'white', borderRadius: 10 }}>
                        <Left>
                            <TouchableOpacity onPress={() => this.openDrawer()}>

                                <Icon name='menu' style={{ color: 'gray' }} />

                            </TouchableOpacity>

                        </Left>
                        <Body>

                            <TextInput
                                style={{ height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 10, }}
                                placeholder='Search here' />

                        </Body>
                        <Right>
                            <TouchableOpacity onPress={() => Alert.alert("search workinng")}>
                                <Icon name='search' style={{ color: 'gray' }} />
                            </TouchableOpacity>

                        </Right>
                    </Header>

                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                    {/* <Spinner
                        name="three-bounce"
                        color="white"
                        visible={this.state.loading}
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                    /> */}
                


                    <FlatGrid
                        itemDimension={130}
                        items={this.state.getall}
                        style={styles.gridView}

                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.navigateToTeledrama(item.id)} activeOpacity={0.8}>

                                <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                    <Image style={{ width: 100, height: 100, top: 15, borderRadius: 10, left: 10 }} source={{ uri: baseurl.BASE_URL + '/images/' + item.ch_Image }} />
                                    <Text style={styles.itemName}>{item.ch_Name}</Text>

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

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
    },
    itemContainer: { 
        justifyContent: 'flex-end',
        padding: 10,
        height: 130,
        width: 140,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 10.65,

        elevation: 6,
    },
    wrapper: {
        marginTop: 30,
        flex: 1
    },
    itemName: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        fontSize: 16,
        color: '#6b6b47',
        fontWeight: '600',
        fontWeight: 'bold',
    },
    spinner: {
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        marginBottom:350,
        left:150
       
      },
    itemCode: {

        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
});