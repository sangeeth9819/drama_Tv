import React, { Component } from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, FlatList, Image, PixelRatio,
    Button, Dimensions, ImageBackground, StatusBar
} from 'react-native';
import SideBar from '../SideMenuscreen/SideMenuScreen';
import Modal from 'react-native-modalbox';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import { Header, Item, Input, Footer, Drawer, Container, Left, Icon, Body, Title, Right } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';

export default class Example extends Component {

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
            playerWidth: Dimensions.get('window').width,
        };
    }

    navigateToTeledrama(id) {

        this.props.navigation.navigate('PlayScreen', {
            id: id
        });
    }

    onClose() {
        console.log('Modal just closed');
    }

    onOpen() {
        console.log('Modal just opened');
    }

    onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
    }
    _youTubeRef = React.createRef();

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

        var title;
        const items = [
            { videoID: '1aJR_sOx70A', videodesc: 'Episoed 169 ', },
            { videoID: '3DsgHY6mtRo', videodesc: '', },
            { videoID: '5ODFPY7Ft1E', videodesc: '', },
            { videoID: 'ddx8d3LZU54', videodesc: '', },
            { videoID: '4EcqUSwYb5I', videodesc: '', },
            { videoID: 'EJHi0msJQvU', videodesc: '', },
            { videoID: 'UAd967OgTpc', videodesc: '', },
            { videoID: 'PC0eYDACeEU', videodesc: '', },
            { videoID: 'U5y_K9rZrmA', videodesc: '', },
        ];

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

                <View style={styles.wrapper}>

                    <Header style={{backgroundColor: 'white', borderRadius: 10, shadowColor: "#000", marginTop: 20,
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.46,
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
                            <TouchableOpacity onPress={() => Alert.alert("search workinng")} style={{ marginRight: 10 }} >
                                <Icon name='search' />
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} onPress={() => this.navigateToTeledrama(this.state.videoId)}>
                                <Icon name='ios-disc' style={{ color: '#00cc44', }} >

                                    <Text style={{ fontSize: 14, color: 'black', }} >Live</Text>
                                </Icon>
                            </TouchableOpacity>
                        </Right>
                    </Header>

                    <FlatList
                        itemDimension={130}
                        data={items}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.navigateToTeledrama(item.videoID)} activeOpacity={0.8}>
                                <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                    <Image style={{ height: 130, width: 130, borderRadius: 20, }} source={{ uri: 'https://i1.ytimg.com/vi/' + item.videoID + '/default.jpg' }}/>
                                  
                                    <Text style={styles.itemName} >{item.videoID}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    gridView:{
       
       
      
    },
    itemName: {
        fontSize: 16,
        color: '#8c8c8c',
        fontWeight: 'bold',
    },

    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },

    row: {
        left: 20,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    itemContainer: {
        height: 130,
        marginLeft: 10,
        width: 340,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
              borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },

    wrapper: {
        marginTop: 10,
        flex: 1
    },
    itemName: {
        fontSize: 16,
        marginLeft: 150,
        color: '#8c8c8c',
        fontWeight: 'bold',

    },
});
