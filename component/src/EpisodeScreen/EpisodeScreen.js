
import React, { Component } from 'react';

import baseurl from '../../resource/strings'

import {
    View, Text, TouchableOpacity, FlatList, Image, PixelRatio, Dimensions, ImageBackground, TextInput,StatusBar
} from 'react-native';

import SideBar from '../SideMenuscreen/SideMenuScreen';
import Spinner from 'react-native-spinkit'

import YouTube, { } from 'react-native-youtube';

import {
    Card,
    Drawer,
    Header,
    Body, Left, Icon,Right
} from 'native-base';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import styles from './EpisodeScreenStyle';

export default class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            swipeToClose: true,
            videoId: '',
            isReady: false,
            status: null,
            something: false,
            quality: null,
            error: null,
            isPlaying: true,
            isLooping: true,
            duration: 0,
            currentTime: 0,
            fullscreen: false,
            getall: [],
            imagepath: '',
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 37,
            color: "red",
            isVisible: false,
            isFetching: false,
            searchname:'',
            playerWidth: Dimensions.get('window').width,
        };
        this.state.videoId = this.props.navigation.state.params.id
        this.state.imagepath = this.props.navigation.state.params.imagepath

    }

    navigateToTeledrama(id) {
        this.setState({
            fullscreen: true,
            videoId: id,
            something: true
        })
    }

    navigateToplaybutton(id) {
        this.setState({
            fullscreen: true,
            videoId: id,
            something: true
        })
    }

    navigateToTeleScreen() {
        this.props.navigation.navigate('TeledramaScreen')
    }
    onRe5fresh() {
        this.setState({ isFetching: true }, function () { this.getallteledrama() });
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
            showTheThing: false
        })
    }

    changeScreenRotate(e) {
        this.setState({ fullscreen: e.isFullscreen });
        if (e.isFullscreen === true) {
        } else {
            this.setState({
                something: false,
                
            })

        }
    }

    componentDidMount() {
        this.getallteledrama()
    }
    componentwillMount() {
        this.searchepisode()
    }
    onRefresh() {
        this.setState({ isFetching: true }, function () { this.getallteledrama() });
    }
    getallteledrama() {
        this.setState({
            isVisible: true
        })
        fetch(baseurl.BASE_URL + '/api/episodes/' + this.state.videoId, {
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
                this.setState({
                    isFetching: false
                })
                console.log("Getall :" + JSON.stringify(responseJson))

                this.setState({
                    getall: responseJson.reverse()

                })
            })

            .catch((error) => {
                this.setState({
                    isVisible: false
                })
                console.error(error);
            });
    }

    searchepisode(text) {
        this.setState({
            isVisible: true
        })
        fetch(baseurl.BASE_URL + '/api/episodess/' + text, {
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
                this.setState({
                    isFetching: false
                })
                console.log("Getall :" + JSON.stringify(responseJson))

                this.setState({
                    getall: responseJson.reverse()

                })
            })

            .catch((error) => {
                this.setState({
                    isVisible: false
                })
                console.error(error);
            });
    }

    render() {
        // var new_play=this.state.getall[0].ep_videoID
        var title;
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


                <View style={{  marginTop: 30,}}>
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
                                style={{ height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 10, }}
                                placeholder='Search here'
                                onChangeText={
                                    text =>
                                    this.searchepisode(text)

                                }
                               
                               
                               
                            />

                        </Body>
                        <Right>
                            <TouchableOpacity onPress={() => this.searchepisode(this.setState.searchname)} style={{ marginRight: 10, backgroundColor: 'Black' }} >
                                <Icon name='search' />
                            </TouchableOpacity>

                           
                        </Right>

                    </Header>
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                    <ImageBackground style={{ height: 300 }} source={{ uri: baseurl.BASE_URL + '/images/' + this.state.imagepath }} >

                        {this.state.something &&
                            <YouTube

                                ref={this._youTubeRef}
                                apiKey="AIzaSyAuASbwwg1f7s8XvH_sh2OP-Vapsaoqy5k"
                                videoId={this.state.videoId}
                                autoPlay
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
                                    this.changeScreenRotate(e)
                                }}
                                onProgress={e => {
                                    this.setState({ currentTime: e.currentTime });
                                }}

                            />


                        }
                        <View style={{
                            alignItems: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            top: 130
                        }}>
                            <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={this.state.types[7]} color={this.state.color} />
                        </View>
                        <TouchableOpacity onPress={() => this.navigateToplaybutton(this.state.getall[0].ep_videoID)} style={{
                            left: 300,
                            top: 190,
                        }}>

                            <View style={styles.imagebutton}>

                                <Image style={{
                                    width: 33, height: 33, top: 8, left: 10,
                                }} source={require('../../assest/play.png')} />


                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigateToTeleScreen()} style={{}}>
                            <Image style={{
                                width: 30, height: 30, bottom: 12, left: 10
                            }} source={require('../../assest/iconBack.png')} />
                        </TouchableOpacity>

                    </ImageBackground>

                </View>

                <View>

                    <Card style={{ height: '100%', borderRadius: 35, bottom: 50, }}>

                        <FlatList
                            itemDimension={130}
                            data={this.state.getall}
                            onRefresh={() => this.onRefresh()}
                            refreshing={this.state.isFetching}
                            style={styles.gridView}

                            renderItem={({ item, index }) => (

                                <TouchableOpacity onPress={() => this.navigateToTeledrama(item.ep_videoID)} activeOpacity={0.8}>
                                    <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                        <Image style={{ height: hp('16.7%'), width: wp('47%'), bottom: 20, right: 20, borderRadius: 20 }} source={{ uri: 'https://img.youtube.com/vi/' + item.ep_videoID + '/0.jpg' }} />
                                        <Text style={styles.itemName} >{item.ep_Title}</Text>
                                        {/* <Text style={styles.itemName} >{item.ep_DateTime}</Text> */}
                                    </View>
                                </TouchableOpacity>

                            )}

                        />

                    </Card>

                </View>


            </Drawer>


        );
    }
}


