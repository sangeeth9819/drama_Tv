
import React, { Component } from 'react';

import SwipeCards from 'react-native-swipeable-cards';

import {
    StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, FlatList, Image, PixelRatio, Button, Dimensions, ImageBackground, StatusBar
} from 'react-native';
import SideBar from '../SideMenuscreen/SideMenuScreen';
import Modal from 'react-native-modalbox';

import YouTube, {
    YouTubeStandaloneIOS,
    YouTubeStandaloneAndroid
} from 'react-native-youtube';

// import { Header } from 'react-navigation-stack';
import {
    Header, Item, Input, Footer, Card,
    Drawer,
}
    from 'native-base';
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
            something: false,
            quality: null,
            error: null,
            isPlaying: true,
            isLooping: true,
            duration: 0,
            currentTime: 0,
            fullscreen: true,
            getall:[],
            playerWidth: Dimensions.get('window').width,
        };
        this.state.videoId = this.props.navigation.state.params.id
    }

    navigateToTeledrama(id) {
        // this.props.navigation.navigate('PlayScreen', {
        //     id: id
        // });
        this.setState({
            fullscreen: true,
            videoId: id,
            something: true
        })
        // Alert.alert(this.state.videoId+"")
        // this.setState({
        //     videoId: 'GuPIZFHFcWQ'
        // })
        // this.refs.modal1.open()
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

    changeScreenRotate(e) {
        this.setState({ fullscreen: e.isFullscreen });
        // Alert.alert(JSON.stringify(e))
        if(e.isFullscreen===true){
            // Alert.alert('true')
        }else{
            this.setState({
                something:false
            })
            // Alert.alert('false')
        }
    }
    
    componentDidMount() {
        this.getallteledrama()
    }
    getallteledrama() {
        this.setState({
            loading:true
        })
        fetch('http://75f68750.ngrok.io/api/episodes/'+this.state.videoId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((responseJson) => {
                this.setState({
                    loading:false
                })
                console.log("Getall :" + JSON.stringify(responseJson))

                this.setState({
                    getall: responseJson
                
                })
            })

            .catch((error) => {
                this.setState({
                    loading:false
                })
                console.error(error);
            });
    }


    render() {

        var title;
        const items = [
            { subName: '2019-01-01', name: 'Episode 169', videoID: '1aJR_sOx70A' },
            { subName: '2019-01-02', name: 'Episode 170', videoID: '3DsgHY6mtRo' },
            { subName: '2019-01-03', name: 'Episode 171', videoID: '5ODFPY7Ft1E' },
            { subName: '2019-01-04', name: 'Episode 172', videoID: 'ddx8d3LZU54' },
            { subName: '2019-01-05', name: 'Episode 173', videoID: '4EcqUSwYb5I' },
            { subName: '2019-01-08', name: 'Episode 174', videoID: 'EJHi0msJQvU' },
            { subName: '2019-01-09', name: 'Episode 175', videoID: 'UAd967OgTpc' },
            { subName: '2019-01-10', name: 'Episode 176', videoID: 'PC0eYDACeEU' },
            { subName: '2019-01-11', name: 'Episode 177', videoID: 'U5y_K9rZrmA' },
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


                <View>
                    <ImageBackground style={{ height: 300 }} source={require('../../assest/Hamuwemu-Aye-Sansare-450x300.jpg')} >


                        {this.state.something &&
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
                                    this.changeScreenRotate(e)
                                }}
                                onProgress={e => {
                                    this.setState({ currentTime: e.currentTime });
                                }}

                            />


                        }
                        <TouchableOpacity onPress={() => Alert.alert("working")} style={{
                            left: 300,
                            top: 190,
                        }}>
                            <View style={styles.imagebutton}>
                                <Image style={{
                                    width: 33, height: 33, top: 8, left: 10,
                                }} source={require('../../assest/play.png')} />
                            </View>
                        </TouchableOpacity>

                    </ImageBackground>

                </View>

                <View>
                    <Card style={{ height: '100%', borderRadius: 35, bottom: 50 }}>

                        <FlatList
                            itemDimension={130}
                            data={this.state.getall}
                            style={styles.gridView}

                            renderItem={({ item, index }) => (

                                <TouchableOpacity onPress={() => this.navigateToTeledrama(item.ep_videoID)}>
                                    <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                        <Image style={{ height: 105, width: 150, bottom: 20, right: 20, borderRadius: 20 }} source={{ uri: 'https://i1.ytimg.com/vi/' + item.videoID + '/default.jpg' }} />
                                        <Text style={styles.itemName} >{item.ep_Title}</Text>
                                        <Text style={styles.itemName} >{item.ep_DateTime}</Text>
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


const styles = StyleSheet.create({

    imagebutton: {
        backgroundColor: '#f44336',
        width: 50,
        height: 50,
        borderRadius: 100,


    },


    buttonStyle4: {
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
    itemContainer: {
        elevation: 5,
        width: 360,
        margin: 10,
        borderRadius: 20,
        padding: 20,
        height: 105,
    },
    itemName: {
        fontSize: 16,
        left: 150,
        bottom: 100,
        color: 'black',
        fontWeight: 'bold',

    },
});


