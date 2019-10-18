import React, { Component } from 'react';

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
        this.props.navigation.navigate('PlayScreen', {
            id: id
        });
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

    render() {

        var title;
        const items = [
            {subName:'2019-01-01', name: 'Episode 169', videoID: '1aJR_sOx70A' },
            {subName:'2019-01-02', name: 'Episode 170', videoID: '3DsgHY6mtRo' },
            {subName:'2019-01-03', name: 'Episode 171', videoID: '5ODFPY7Ft1E' },
            {subName:'2019-01-04', name: 'Episode 172', videoID: 'ddx8d3LZU54' },
            {subName:'2019-01-05', name: 'Episode 173', videoID: '4EcqUSwYb5I' },
            {subName:'2019-01-08', name: 'Episode 174', videoID: 'EJHi0msJQvU' },
            {subName:'2019-01-09', name: 'Episode 175', videoID: 'UAd967OgTpc' },
            {subName:'2019-01-10', name: 'Episode 176', videoID: 'PC0eYDACeEU' },
            {subName:'2019-01-11', name: 'Episode 177', videoID: 'U5y_K9rZrmA' },
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
                    <Card style={{ height:'100%', borderRadius: 35, bottom: 50 }}>

                        <FlatList
                            itemDimension={130}
                            data={items}
                            style={styles.gridView}

                            renderItem={({ item, index }) => (

                                <TouchableOpacity onPress={() => this.navigateToTeledrama(item.videoID)}>
                                    <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                        <Image style={{ height: 105, width: 150, bottom: 20, right: 20, borderRadius: 20 }} source={{ uri: 'https://i1.ytimg.com/vi/' + item.videoID + '/default.jpg' }} />
                                        <Text style={styles.itemName} >{item.name}</Text>
                                        <Text style={styles.itemName} >{item.subName}</Text>
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
        height: 105,
    },
    itemName: {
        fontSize: 16,
        left: 200,
        bottom:100,
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

