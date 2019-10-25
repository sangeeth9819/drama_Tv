
import React, { Component } from 'react';
<<<<<<< HEAD

import baseurl from '../../resource/strings'

import {
    StyleSheet, View, Text, TouchableOpacity, FlatList, Image, PixelRatio, Dimensions, ImageBackground,
} from 'react-native';

import SideBar from '../SideMenuscreen/SideMenuScreen';
import Spinner from 'react-native-spinkit'

import YouTube, {} from 'react-native-youtube';

import {
    Card,
    Drawer,
   
} from 'native-base';

import styles from './EpisodeScreenStyle';
=======
import baseurl from '../../resource/strings'
import {
    StyleSheet, View, Text,TouchableOpacity, Alert, FlatList, Image, PixelRatio,Dimensions, ImageBackground,
} from 'react-native';
import SideBar from '../SideMenuscreen/SideMenuScreen';
import Spinner from'react-native-spinkit'
import YouTube, {
} from 'react-native-youtube';
import {
  Card,
    Drawer,
}
    from 'native-base';

>>>>>>> a

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
<<<<<<< HEAD
            getall: [],
            imagepath: '',
=======
            getall:[],
            imagepath:'',
>>>>>>> a
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 37,
            color: "red",
            isVisible: false,
<<<<<<< HEAD
            isFetching: false,
=======
>>>>>>> a
            playerWidth: Dimensions.get('window').width,
        };
        this.state.videoId = this.props.navigation.state.params.id
        this.state.imagepath = this.props.navigation.state.params.imagepath
<<<<<<< HEAD

    }

    navigateToTeledrama(id) {
=======
      
    }

    navigateToTeledrama(id) {   
>>>>>>> a
        this.setState({
            fullscreen: true,
            videoId: id,
            something: true
        })
    }

<<<<<<< HEAD
    navigateToplaybutton(id) {
=======
    navigateToplaybutton(id) {       
>>>>>>> a
        this.setState({
            fullscreen: true,
            videoId: id,
            something: true
<<<<<<< HEAD
        })
    }

    navigateToTeleScreen() {
        this.props.navigation.navigate('TeledramaScreen')
    }
    onRefresh() {
        this.setState({ isFetching: true }, function() { this.getallteledrama() });
     }
=======
        })       
    }
    
>>>>>>> a
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
<<<<<<< HEAD
<<<<<<< HEAD
        if (e.isFullscreen === true) {
=======
        // Alert.alert(JSON.stringify(e))
        if (e.isFullscreen === true) {
            // Alert.alert('true')
>>>>>>> new123
        } else {
            this.setState({
                something: false
            })

        }
    }

=======
        if(e.isFullscreen===true){
        }else{
            this.setState({
                something:false
            })
          
        }
    }
  
>>>>>>> a
    componentDidMount() {
        this.getallteledrama()
    }
    getallteledrama() {
        this.setState({
<<<<<<< HEAD
            isVisible: true
        })
        fetch(baseurl.BASE_URL + '/api/episodes/' + this.state.videoId, {
=======
            isVisible:true
        })
        fetch(baseurl.BASE_URL+'/api/episodes/'+this.state.videoId, {
>>>>>>> a
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((responseJson) => {
                this.setState({
<<<<<<< HEAD
                    isVisible: false
                })
                this.setState({
                     isFetching: false
                     })
=======
                    isVisible:false
                })
>>>>>>> a
                console.log("Getall :" + JSON.stringify(responseJson))

                this.setState({
                    getall: responseJson.reverse()
<<<<<<< HEAD

=======
                
>>>>>>> a
                })
            })

            .catch((error) => {
                this.setState({
<<<<<<< HEAD
                    isVisible: false
=======
                    isVisible:false
>>>>>>> a
                })
                console.error(error);
            });
    }


    render() {
        // var new_play=this.state.getall[0].ep_videoID
<<<<<<< HEAD
        var title;
=======
        var title; 
>>>>>>> a
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

<<<<<<< HEAD
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

<<<<<<< HEAD
                <View>
                    <ImageBackground style={{ height: 300 }} source={{ uri: baseurl.BASE_URL + '/images/' + this.state.imagepath }} >

                        {this.state.something &&
                            <YouTube

=======

                <View>
                    <ImageBackground style={{ height: 300 }} source={{ uri: baseurl.BASE_URL+'/images/'+ this.state.imagepath }} >


                        {this.state.something &&
                            <YouTube
                          
>>>>>>> a
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
<<<<<<< HEAD

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
=======
>>>>>>> new123


                <View>
<<<<<<< HEAD

                    <Card style={{ height: '100%', borderRadius: 35, bottom: 50, }}>
=======
                    <Card style={{ height: '100%', borderRadius: 35, bottom: 50,   }}>
>>>>>>> new123

                        <FlatList
                            itemDimension={130}
                            data={this.state.getall}
                            onRefresh={() => this.onRefresh()}
                            refreshing={this.state.isFetching}
=======
                        <TouchableOpacity onPress={() =>  this. navigateToplaybutton(this.state.getall[0].ep_videoID)} style={{
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
>>>>>>> a
                            style={styles.gridView}

                            renderItem={({ item, index }) => (

<<<<<<< HEAD
<<<<<<< HEAD
                                <TouchableOpacity onPress={() => this.navigateToTeledrama(item.ep_videoID)} activeOpacity={0.8}>
=======
                                <TouchableOpacity onPress={() => this.navigateToTeledrama(item.videoID)} style={{}}>
>>>>>>> new123
                                    <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                        <Image style={{ height: 108, width: 192, bottom: 20, right: 20, borderRadius: 20 }} source={{ uri: 'https://img.youtube.com/vi/' + item.ep_videoID + '/0.jpg' }} />
=======
                                <TouchableOpacity onPress={() => this.navigateToTeledrama(item.ep_videoID)} activeOpacity={0.8}>
                                    <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
                                        <Image style={{ height: 105, width: 150, bottom: 20, right: 20, borderRadius: 20 }} source={{ uri: 'https://i1.ytimg.com/vi/' + item.ep_videoID + '/default.jpg' }} />
>>>>>>> a
                                        <Text style={styles.itemName} >{item.ep_Title}</Text>
                                        {/* <Text style={styles.itemName} >{item.ep_DateTime}</Text> */}
                                    </View>
                                </TouchableOpacity>
<<<<<<< HEAD

                            )}

                        />

                    </Card>
                    <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={this.state.types[7]} color={this.state.color} />
                </View>

=======
                                
                            )}
                            
                        />

                    </Card>
                    <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={this.state.types[7]} color={this.state.color}/>
                </View>
                
>>>>>>> a
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
<<<<<<< HEAD

    buttonStyle4: {
        fontWeight: 'bold',
    },

=======
 
    buttonStyle4: {
        fontWeight: 'bold',
    },
 
>>>>>>> a
    itemCode: {
        fontWeight: '100',
        fontSize: 8,
        color: '#fff',
    },
<<<<<<< HEAD

=======
 
>>>>>>> a
    row: {
        left: 20,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    itemContainer: {
        height: 130,
        marginLeft: 10,
        width: 340,
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
<<<<<<< HEAD
<<<<<<< HEAD
        width: 375,
=======
        width: 340,
>>>>>>> new123
=======
        width: 340,
>>>>>>> a
        marginTop: 20,
        marginLeft: 6,
        borderRadius: 20,
        padding: 20,
        height: 105,
    },
    wrapper: {
        marginTop: 50,
        flex: 1
    },
    itemName: {
        fontSize: 14,
<<<<<<< HEAD
        left: 180,
        height: 100,
        width: 120,
        bottom: 100,
        color: 'black',
        fontWeight: 'bold',

    },
    spinner: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 350,
        left: 150

    },
});


=======
        left: 150,
        height:100,
        width:150,
        bottom: 100,
        color: 'black',
        fontWeight: 'bold',
 
    },
    spinner: {
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        marginBottom:350,
        left:150
       
      },
});
>>>>>>> a
