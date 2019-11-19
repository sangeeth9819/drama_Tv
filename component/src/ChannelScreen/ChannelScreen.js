import React, { Component } from 'react';

import {
    Text, View, Image, TouchableOpacity, Alert, StatusBar, Dimensions, TextInput, ImageBackground,
} from 'react-native';

import { Header, Drawer, Left, Icon, Body, Right } from 'native-base';

import { FlatGrid } from 'react-native-super-grid';

import SideBar from '../SideMenuscreen/SideMenuScreen';

// import Spinner from 'react-native-loading-spinner-overlay';
import baseurl from '../../resource/strings'

import Spinner from 'react-native-spinkit'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './ChannelScreenStyle';
import Orientation from 'react-native-orientation-locker';
import { TabBar } from "react-native-animated-nav-tab-bar";

// import Icon from 'react-native-vector-icons/Feather';

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

tracker1.trackScreenView("Channel Screen");
tracker1.trackEvent("Channel Screen", "New");

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
    tracker.setAppVersion("1.4.5");
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
    event: "Channel",
    pageId: "/ Channel Screen"
}).then(success => console.log(success));

const dataLayerEvent = {
    event: "channel ",
    pageId: "/channel screen"
};
GoogleTagManager.pushDataLayerEvent(dataLayerEvent);

///////////////////////////////////////////////////////////////////////////////////////////

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
            status: '',
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
            isFetching: false,
            isVisible: false,
            searchname: '',


        };

    }
    onRefresh() {
        Orientation.unlockAllOrientations();
        this.setState({ isFetching: true }, function () { this.getAll() });
    }
    componentDidMount() {
        this.getAll()
    }
    componentwillMount() {
        Orientation.unlockAllOrientations();
        this.searchChannel()
    }


    getAll() {

        this.setState({
            isVisible: true
        })
        console.log('text');
        fetch('https://dramatv.commercialtp.com/api/channels', {
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
                console.log("getAll :" + JSON.stringify(responseJson))
                this.setState({
                    getall: responseJson
                })
                    .then((resp) => resp.json())
                    .then((responseJson) => {
                        this.setState({
                            isVisible: false
                        })
                        console.log("getAll :" + JSON.stringify(responseJson))
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
            )
    }

    searchChannel(text) {
        this.setState({
            isVisible: true
        })
        console.log('text');
        fetch('https://dramatv.commercialtp.com/api/channels/' + text, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then((resp) => resp.json())
            .then((responseJson) => {
                this.setState({
                    isVisible: false,
                    dataSource: responseJson
                })
                this.setState({
                    isFetching: false
                },
                    function () {
                        this.getall = responseJson;
                    }
                )
                console.log("getAll :" + JSON.stringify(responseJson[0].ch_Image))
                this.setState({
                    getall: responseJson
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

                searchname = text => {
                    console.log(text);
                };
            }
            )
    }

    navigatechannel() {
        Orientation.unlockAllOrientations();
        this.props.navigation.navigate('TeledramaScreen')
    };

    closeDrawer = () => {
        //  this.drawer._root.close()
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
    navigateToTeledrama(id, ch_videoID) {

        Orientation.unlockAllOrientations();
        this.props.navigation.navigate('TeledramaScreen', {

            id: id,
            ch_videoID: ch_videoID
        });
    }






    render() {

        return (

            <Drawer

                side="left" ref={(ref) => { this.drawer = ref; }}
                acceptPan={true}
                panOpenMask={1}
                onFullScreenEnter={() => Orientation.unlockAllOrientations()}
                content={<SideBar navigation={this.props.navigation} />}
                onClose={() => this.closeDrawer()}
                tweenHandler={(ratio) => ({
                    main: { opacity: (1 - ratio) / 1 }
                })}>


                <View style={styles.wrapper}>

                    <Header style={{
                        marginTop: 5, backgroundColor: 'white', borderRadius: 10, shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.46,
                        shadowRadius: 11.14,
                        elevation: 17,
                    }}>
                        <Left>
                            <TouchableOpacity style={{ width: 100 }} onPress={() => this.openDrawer()}>

                                <Icon name='menu' style={{ color: 'gray' }} />

                            </TouchableOpacity>

                        </Left>
                        <Body>

                            <TextInput
                                style={{ height: 40, width: 250, borderRadius: 10, borderRadius: 20, marginTop: 5, backgroundColor: '#f5f5f0', }}
                                placeholder='                         Search here                  '
                                onChangeText={
                                    text =>
                                        this.searchChannel(text)
                                }
                            />

                        </Body>
                        <Right>
                            <TouchableOpacity onPress={() => this.searchChannel(this.setState.searchname)}>
                                <Icon name='search' style={{ color: 'gray' }} />
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
                    <FlatGrid
                        itemDimension={130}
                        items={this.state.getall}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        style={styles.gridView}

                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.navigateToTeledrama(item.id, item.ch_videoID)} style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: 'center',
                                alignItems: 'center',
                            }} activeOpacity={0.8}>

                                <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>

                                    <ImageBackground style={{ width: 130, height: 130, top: 30 }} source={{ uri: baseurl.BASE_URL + '/images/' + item.ch_Image }} />
                                    <Text style={styles.itemName} >{item.ch_Name}</Text>
                                    <View style={styles.status}>
                                        <View style={this.state.status === item.ch_videoID ? styles.online : styles.offline} />


                                        <Text style={styles.statusText}>Live</Text>
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
