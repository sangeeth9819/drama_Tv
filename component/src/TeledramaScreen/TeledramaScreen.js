import React, { Component } from 'react';

import {
    StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar,
    Dimensions, TextInput, PixelRatio,
} from 'react-native';
import { Header, Drawer, Left, Icon, Body, Right } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';

import SideBar from '../SideMenuscreen/SideMenuScreen';
import Spinner from 'react-native-spinkit'
import baseurl from '../../resource/strings'
import YouTube, {
} from 'react-native-youtube';


export default class TeledramaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: '',
            liveid: '',
            getall: [],
            isPlaying: true,
            isReady: false,
            isLooping: true,
            isOpen: false,
            swipeToClose: true,
            currentTime: 0,
            fullscreen: true,
            something: false,
            loading: false,
            fullscreen: true,
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 37,
            color: "red",
            isVisible: false,
            isFetching: false,
            playerWidth: Dimensions.get('window').width,

        };
        this.state.videoId = this.props.navigation.state.params.id
        this.state.liveid = this.props.navigation.state.params.ch_videoID

    }
    onRefresh() {
        this.setState({ isFetching: true }, function () { this.getallteledrama() });
    }

    componentDidMount() {
        this.getallteledrama()
    }
    _youTubeRef = React.createRef();

    changeScreenRotate(e) {
        this.setState({ fullscreen: e.isFullscreen });
        if (e.isFullscreen === true) {
        } else {
            this.setState({
                something: false
            })

        }
    }
    getallteledrama() {
        this.setState({
            isVisible: true
        })
        fetch(baseurl.BASE_URL + '/api/teledramas/' + this.state.videoId, {
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



    renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }
    navigateTo_Channel() {
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
    navigateToTeledrama(id, imagepath) {
        this.props.navigation.navigate('EpisodeScreen', {
            id: id,
            imagepath: imagepath
        });

    }

    navigateToplay(ch_videoID) {

        this.setState({
            fullscreen: true,
            liveid: ch_videoID,
            something: true
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

                            <TouchableOpacity onPress={() => this.navigateToplay(this.state.liveid)}>
                                <Icon name='ios-disc' style={{ color: '#00cc44', }} >
                                    <Text style={{ fontSize: 14, color: 'black', }} >Live</Text>
                                </Icon>
                            </TouchableOpacity>
                        </Right>

                    </Header>
                    {this.state.something &&
                            <YouTube

                                ref={this._youTubeRef}
                                apiKey="AIzaSyAuASbwwg1f7s8XvH_sh2OP-Vapsaoqy5k"
                                videoId={this.state.liveid}

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

                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />

                    {/* Body Content */}
                    <FlatGrid
                        itemDimension={270}
                        items={this.state.getall}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.navigateToTeledrama(item.id, item.te_Image)} activeOpacity={0.8}>
                                <View style={{ borderRadius: 50 }}>
                                    <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>

                                        <Image style={{ height: 250, width: 340, borderRadius: 20 }} source={{ uri: baseurl.BASE_URL + '/images/' + item.te_Image }} >

                                        </Image>
                                        <Text style={styles.itemName} style={{ left: 18, fontSize: 18, color: '#000', fontWeight: 'bold' }}>{item.te_Name}</Text>
                                        {/* <Text style={styles.itemName} style={{ left: 18, fontSize: 18, color: '#000' }}>{item.created_at}</Text> */}

                                    </View>
                                </View>

                            </TouchableOpacity>
                        )}

                    />
                    <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={this.state.types[7]} color={this.state.color} />
                </View>
            </Drawer>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    gridView: {

    },
    row: {
        left: 20,
        padding: 15,
        backgroundColor: 'white',
        width: 500,
        height: 80,
        borderRadius: 20,
    },
    itemContainer: {
        height: 250,
        width: 340,
        elevation: 5,
        marginTop: 42,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },

    wrapper: {
        marginTop: 30,
        flex: 1
    },
    spinner: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 350,
        left: 150

    },
})
