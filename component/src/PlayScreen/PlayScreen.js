import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    FlatList,
    Image,
    PixelRatio,
    Button,
    Dimensions,
    ImageBackground,
    StatusBar
} from 'react-native';
import { Container, Left, Icon, Body, Title, Right } from 'native-base';
import SideBar from '../SideMenuscreen/SideMenuScreen';
import Modal from 'react-native-modalbox';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import { Header, Item, Input, Footer, Card, Drawer, } from 'native-base';
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
        this.state.videoId = this.props.navigation.state.params.id
    }
    navigateToTeledrama(value) {
        this.setState.videoId = this.props.navigation.state.params.id
        Alert.alert("Working")
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
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />


                <View style={styles.wrapper}>

                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />

                    <View style={{ bottom: 45, }}>
                        <Header style={{
                          backgroundColor: 'white', borderRadius: 10, shadowColor: "#000",marginTop:40,
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
                                style={{ height: 40, width: 250, borderRadius: 10,  borderRadius: 20,marginTop:5
                             }}
                                placeholder='                      Search here' />

                            </Body>
                            <Right>
                                <TouchableOpacity onPress={() => Alert.alert("search workinng")} style={{ marginRight: 10 }} >
                                    <Icon name='search' />
                                </TouchableOpacity>
                            </Right>

                        </Header>
                    </View>



                    <YouTube

                        ref={this._youTubeRef}
                        apiKey="AIzaSyAuASbwwg1f7s8XvH_sh2OP-Vapsaoqy5k"
                        videoId={this.state.videoId}

                        play={this.state.isPlaying}
                        loop={this.state.isLooping}
                        fullscreen={this.state.fullscreen}
                        controls={1}
                        style={[
                            { height: PixelRatio.roundToNearestPixel(this.state.playerWidth / (16 / 9)) },
                            styles.player,
                        ]}
                        onError={e => {
                            this.setState({ error: e.error });
                        }}
                        onReady={e => {
                            this.setState({ isReady: true });
                        }}
                        onChangeState={e => {
                            this.setState({ status: e.state });
                        }}
                        onChangeQuality={e => {
                            this.setState({ quality: e.quality });
                        }}
                        onChangeFullscreen={e => {
                            this.setState({ fullscreen: e.isFullscreen });
                        }}
                        onProgress={e => {
                            this.setState({ currentTime: e.currentTime });
                        }}
                    />

                    <FlatList
                        itemDimension={130}
                        data={items}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.navigateToTeledrama(item.videoID)} activeOpacity={0.9}>
                                <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                    <Image style={{ height: 125, width: 175, bottom: 20, right: 20, borderRadius: 0 }} source={{ uri: 'https://i1.ytimg.com/vi/' + item.videoID + '/default.jpg' }} />

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
        marginTop:30,
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

