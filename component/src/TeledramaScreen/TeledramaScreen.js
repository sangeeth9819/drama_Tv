import React, { Component } from 'react';
import {
    Text, View, Image, TouchableOpacity, Alert, StatusBar, PixelRatio, Dimensions, TextInput, StyleSheet
} from 'react-native';
import { Header, Drawer, Left, Icon, Body, Right } from 'native-base';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import YouTube, { } from 'react-native-youtube';

import { FlatGrid } from 'react-native-super-grid';

import SideBar from '../SideMenuscreen/SideMenuScreen';

import Spinner from 'react-native-spinkit'

import baseurl from '../../resource/strings'

import styles from './TeledramaScreenStyle';

import Orientation from 'react-native-orientation-locker';


/////////////////////////////////////////////////////////////////////////////////////////////
/*Google analitic Data*/
/////////////////////////////////////////////////////////////////////////////////////////////
import {
    GoogleAnalyticsTracker,
    GoogleTagManager,
    GoogleAnalyticsSettings
} from "react-native-google-analytics-bridge";

// The tracker must be constructed, and you can have multiple:
let tracker1 = new GoogleAnalyticsTracker("UA-12345-1");
let tracker2 = new GoogleAnalyticsTracker("UA-12345-2");

tracker1.trackScreenView("Teledrama Screen");
tracker1.trackEvent("Teledrama Screen", "New");

GoogleTagManager.openContainerWithId("GT-NZT48")
    .then(() => GoogleTagManager.stringForKey("pack"))
    .then(str => console.log("Pack: ", str));

// The GoogleAnalyticsSettings is static, and settings are applied across all trackers:
GoogleAnalyticsSettings.setDispatchInterval(30);
// Setting `dryRun` to `true` lets you test tracking without sending data to GA
GoogleAnalyticsSettings.setDryRun(true);

// GoogleTagManager is also static, and works only with one container. All functions here are Promises:
GoogleTagManager.openContainerWithId("GT-NZT48")
    .then(() => {
        return GoogleTagManager.stringForKey("pack");
    })
    .then(pack => {
        console.log("Pack: ", pack);
    })
    .catch(err => {
        console.log(err);
    });

// You can also register Function Call tag handlers when the container is open.
GoogleTagManager.registerFunctionCallTagHandler(
    "some_function", // Must be equal to Function Name field when the tag was configured.
    (functionName, tagArguments) => {
        // functionName is passed for convenience. In this example it will be equal to "some_function".
        // tagArguments is an object and is populated based on Tag configuration in TagManager interface.
        console.log("Handling Function Call tag:", functionName);
    }
)

export const setAppName = (Dramatv) => {
    tracker.setAppName(Dramatv);
};
export const Event = (Event) => {
    tracker.trackEvent("TouchableOpacity", "onPress");
    tracker.setAnonymizeIp(true);
};
export const setAppVersion = (setAppVersion) => {
    tracker.setAppVersion("1.4.2");
};

GoogleAnalyticsSettings.setDryRun(true);
/**
setDispatchInterval allows you to configure how often (in seconds) the batches are sent to your tracker.
*/
//GoogleAnalyticsSettings.setDispatchInterval(parseInt(Config.GA_TRACKER_INTERVAL));
/**
Initialise the tracker based on the environment based tracker ID
*/
//export const tracker = new GoogleAnalyticsTracker(Config.GA_TRACKER_ID,{CD_A: 1, CD_B: 2});

GoogleTagManager.openContainerWithId("GT-NZT48")
    .then(() => GoogleTagManager.stringForKey("pack"))
    .then(str => console.log("Pack: ", str));

GoogleTagManager.pushDataLayerEvent({
    event: "Teledrama",
    pageId: "/Teledrama Screen"
}).then(success => console.log(success));


const dataLayerEvent = {
    event: "Teledrama ",
    pageId: "/Teledrama screen"
  };
  GoogleTagManager.pushDataLayerEvent(dataLayerEvent);
///////////////////////////////////////////////////////////////////////////////////////////

export default class TeledramaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            swipeToClose: true,
            liveid: '',
            videoId: '',
            getall: [],
            isReady: false,
            status: null,
            something: false,
            quality: null,
            error: null,
            isPlaying: true,
            isLooping: true,
            duration: 0,
            currentTime: 0,
            fullscreen: true,
            loading: false,
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 37,
            color: "red",
            isVisible: false,
            isFetching: false,
            searchname: '',
            playerWidth: Dimensions.get('window').width,

        };
        this.state.videoId = this.props.navigation.state.params.id
        this.state.liveid = this.props.navigation.state.params.ch_videoID
    }

    componentDidMount() {

        this.getallteledrama()

    }
    componentwillMount() {
        Orientation.unlockAllOrientations();
        this.searchteledrama()

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

    searchteledrama(text) {
        this.setState({
            isVisible: true
        })
        fetch(baseurl.BASE_URL + '/api/teledramass/' + text, {
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

    navigateTo_Episode() {

        this.props.navigation.navigate('EpisodeScreen')
    };
    closeDrawer = () => {
        this.drawer._root.close()
    };
    _youTubeRef = React.createRef();

    openDrawer = () => {

        this.drawer._root.open()
    };
    onRefresh() {
        this.setState({ isFetching: true }, function () { this.getallteledrama() });
    }

    onClose = () => {
        this.setState({
            showTheThing: true
        })
    }

    navigateToplay(ch_videoID) {
        this.setState({
            fullscreen: true,
            liveid: ch_videoID,
            something: true
        })
    }

    navigateToTeledrama(id, imagepath) {
        this.props.navigation.navigate('EpisodeScreen', {
            id: id,
            imagepath: imagepath,

        });
    }

    changeScreenRotate(e) {
        this.setState({ fullscreen: e.isFullscreen });
        if (e.isFullscreen === true) {

        } else {
            this.setState({
                something: false
            })

        }
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
                        marginTop: 10,
                        backgroundColor: 'white', borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.46,
                        shadowRadius: 11.14,
                        elevation: 17,marginTop:hp('0%'),
                    }}>
                        <Left>
                            <TouchableOpacity onPress={() => this.openDrawer()}>
                                <Icon name='menu' style={{ color: 'gray' }} />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <TextInput
                                style={{
                                    height: 40, width: 220, borderRadius: 10, borderRadius: 20, marginTop: 10, marginLeft: 2, backgroundColor: '#f5f5f0'
                                }}
                                placeholder='                     Search here'
                                onChangeText={
                                    text => this.searchteledrama(text)
                                }
                            />
                        </Body>
                        <Right>
                            {/* <TouchableOpacity onPress={() => this.searchteledrama(this.setState.searchname)} style={{ marginRight: 10, backgroundColor: 'Black' }} >
                                <Icon name='search' />
                            </TouchableOpacity> */}

                            <TouchableOpacity style={{}} onPress={() => this.navigateToplay(this.state.liveid)}>
                                <Icon name='ios-disc' style={{ color: '#00cc44', }} >
                                    <Text style={{ fontSize: 14, color: 'black', }} >Live</Text>
                                </Icon>
                            </TouchableOpacity>
                        </Right>

                    </Header>

                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        top: 250
                    }}>
                        <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={this.state.types[7]} color={this.state.color} />
                    </View>
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
                                Orientation.lockToLandscapeLeft();
                            }}
                            onProgress={e => {
                                this.setState({ currentTime: e.currentTime });
                            }}
                            onFullScreenExit={() => Orientation.unlockAllOrientations()}
                        />
                    }
                    {/* Body Content */}

                    <FlatGrid
                        itemDimension={270}
                        items={this.state.getall}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.navigateToTeledrama(item.id, item.te_Image, item.te_Name)} activeOpacity={0.8}>
                                <View style={{ borderRadius: 50, alignItems: "center", justifyContent: "center", alignContent: "center", }}>
                                    <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                        <Image style={{
                                            flex: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            height: hp('60%'),
                                            width: wp('95%'),
                                            borderRadius: 20
                                        }} source={{ uri: baseurl.BASE_URL + '/images/' + item.te_Image }} >
                                        </Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Drawer>
        );
    }
}