import React, { Component } from 'react';

import {StyleSheet,View,Text,TextInput,TouchableOpacity,Alert,FlatList,Image,PixelRatio,Button,Dimensions,ImageBackground,StatusBar
} from 'react-native';
import SideBar from '../SideMenuscreen/SideMenuScreen';
 
import Modal from 'react-native-modalbox';
 
import YouTube, {
    YouTubeStandaloneIOS,
    YouTubeStandaloneAndroid
} from 'react-native-youtube';
 
// import { Header } from 'react-navigation-stack';
import { Header, Item, Input, Footer, Drawer, Container, Left, Icon, Body, Title, Right } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
 
export default class Example extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            // isDisabled: false,
            swipeToClose: true,
            // sliderValue: 0.3,
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
       
        this.props.navigation.navigate('PlayScreen',{
            id:id
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
            { videoID: '1aJR_sOx70A' },
            { videoID: '3DsgHY6mtRo' },
            { videoID: '5ODFPY7Ft1E' },
            { videoID: 'ddx8d3LZU54' },
            { videoID: '4EcqUSwYb5I' },
            { videoID: 'EJHi0msJQvU' },
            { videoID: 'UAd967OgTpc' },
            { videoID: 'PC0eYDACeEU' },
            { videoID: 'U5y_K9rZrmA' },
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
           
 
            <View style={styles.wrapper}>
 
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
 
                <View style={{ bottom: 45, }}>
                <Header style={{ marginTop: 35, backgroundColor: 'white', borderRadius: 10 }}>
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
{/* <TouchableOpacity onPress={() => Alert.alert("Live workinng")}>
<Image style={{ width: 25, height: 25, top: 8 }} source={require('../../assest/live.png')} />
                                        <Text>Live</Text> */}

{/* </TouchableOpacity> */}
                            </Right>
                        </Header>

                </View>
             
                <FlatList
                    itemDimension={130}
                    data={items}
                    style={styles.gridView}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => this.navigateToTeledrama(item.videoID)}>
                            <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                <Image style={{ height: 125, width: 150, bottom: 20, right: 20, borderRadius: 0 }} source={{ uri: 'https://i1.ytimg.com/vi/' + item.videoID + '/default.jpg' }} />
 
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
 
    buttonStyle4: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        top: 10
 
    },
 
    buttonStyle3: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
 
    },
    buttonStyle2: {
        width: 300,
        height: 50,
        borderRadius: 30
    },
 
    text: {
        color: 'white',
    },
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    wrapper: {
        marginTop: 1,
        paddingTop: 50,
        flex: 1
    },
    itemContainer: {
        elevation: 5,
        width: 360,
        margin: 10,
        borderRadius: 20,
        padding: 20,
        height: 125,
    },
    itemName: {
        fontSize: 16,
        left: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    modal: {
        color: 'blue',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    modalContainer: {
        top: 55,
        flex: 1,
        backgroundColor: 'white',
    }
 
});
