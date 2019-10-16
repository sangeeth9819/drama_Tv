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
import SideBar from '../SideMenuscreen/SideMenuScreen';

import Modal from 'react-native-modalbox';

import YouTube, {
    YouTubeStandaloneIOS,
    YouTubeStandaloneAndroid
} from 'react-native-youtube';

// import { Header } from 'react-navigation-stack';
import {
    Header,
    Item,
    Input,
    Footer,
    Card,
    Drawer,
}
    from 'native-base';
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
        this.state.videoId = this.props.navigation.state.params.id
        // Alert.alert(this.state.videoId + "")
    }


    navigateToTeledrama(value) {
        // this.setState({
        //     videoId: 'GuPIZFHFcWQ'
        // })
        // this.setState.videoId = this.props.navigation.state.params.id
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


                <View style={styles.wrapper}>

                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />

                    <View style={{ bottom: 45, }}>
                        
                    <Header style={{ backgroundColor: 'white',  top: 20, height: 44, }}>
                        <TouchableOpacity onPress={() => this.openDrawer()}style={{top:10,right:50}}>
                            <View >
                                {/* <View style={{ width: 50, height: 60, borderRadius: 20 }}> */}
                                    <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                        <Image style={{ width: 25, height: 25,}} source={require('../../assest/menu.png')} />
                                    </View>
                                {/* </View> */}
                            </View>
                        </TouchableOpacity>
 
                        <TouchableOpacity  >
                            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center',width: 150, height: 30,right:30,top:10}}>
                                {/* <View style={{ right:20,width: 150, height: 30, }}> */}
 
                                    <TextInput
                                        style={{height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 10,  }}
                                        placeholder='Search here' />
 
                                {/* </View> */}
                            </View>
                        </TouchableOpacity>
 
                        <TouchableOpacity onPress={() => Alert.alert("search workinng")} style={{ right: 10,top:15 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' ,}}>
                                {/* <View style={{ width: 30, height: 50, borderRadius: 30 }}> */}
                                    <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                        <Image style={{ width: 25, height: 25,}} source={require('../../assest/search.png')} />
                                    </View>
                                {/* </View> */}
                            </View>
                        </TouchableOpacity>
                         <TouchableOpacity onPress={() => Alert.alert("Live workinng")} style={{top:12,left:20}}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                {/* <View style={{ width: 35, height: 50, borderRadius: 30 }}> */}
                                    <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                        <Image style={{ width: 25, height: 25, top: 8 }} source={require('../../assest/icons8-live-photos-30.png')} />
                                        <TextInput
                                        style={{ bottom:25,left:30,height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: '#FAFAFA' }}
                                        placeholder='Live' />
                                    </View>
                                {/* </View> */}
                            </View>
                        </TouchableOpacity>
 
                    </Header>

                    </View>



                    <FlatList
                        itemDimension={130}
                        data={items}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.navigateToTeledrama(item.videoID)}>
                                <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                    <Image style={{ height: 125, width: 175, bottom: 20, right: 20, borderRadius: 0 }} source={{ uri: 'https://i1.ytimg.com/vi/' + item.videoID + '/default.jpg' }} />

                                    <Text style={styles.itemName} >{item.videoID}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />


                </View>

                {/* <FlatList
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
                />  */}

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
        marginTop: 10,
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

