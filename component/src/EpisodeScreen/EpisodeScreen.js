import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    FlatList,
    Image,
    PixelRatio,
    Button,
    Dimensions
} from 'react-native';

import Modal from 'react-native-modalbox';

import YouTube, {
    YouTubeStandaloneIOS,
    YouTubeStandaloneAndroid
} from 'react-native-youtube';

// import { Header } from 'react-navigation-stack';
import { Header,
     Item, 
     Input,
      Footer, }
       from 'native-base';


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
            fullscreen: false,
            playerWidth: Dimensions.get('window').width,
        };
    }


    navigateToTeledrama(value) {
        this.setState({
            videoId: value
        })
        this.refs.modal1.open()
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


            <View style={styles.wrapper}>


                <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"modal1"}
                    swipeToClose={this.state.swipeToClose}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}>




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

                </Modal>




                <FlatList
                    itemDimension={130}
                    data={items}
                    style={styles.gridView}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => this.navigateToTeledrama(item.videoID)}>
                            <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                <Image style={{ height: 100, width: 50 }} source={{ uri: 'https://i1.ytimg.com/vi/' + item.videoID + '/default.jpg' }} />
                                
                                <Text style={styles.itemName} >{item.videoID}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

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
        marginTop: 20,
        flex: 1,
    },
    wrapper: {
        marginTop: 10,
        paddingTop: 50,
        flex: 1
    },
    itemContainer: {
        elevation:5,
        width: 370,
        height: 100,
        margin: 10,
        borderRadius: 20,
        padding: 20,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        left:20,
        color: 'black',
        fontWeight:'bold',
    },
    modal: {
        color: 'blue',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    

});

