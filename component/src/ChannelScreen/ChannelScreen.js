
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight, StatusBar,
    TouchableNativeFeedback, TouchableWithoutFeedback, FlatList, Dimensions, SearchBar, ScrollView, TextInput
} from 'react-native';
import { Header, Item, Input, Footer, Drawer, Container, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import SideBar from '../SideMenuscreen/SideMenuScreen';
import Spinner from 'react-native-loading-spinner-overlay';
import Spinkit from 'react-native-spinkit';


const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }
    return data;
};
const numColumns = 3;

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
                    loading:false,
                    getall: [],
                    playerWidth: Dimensions.get('window').width,
                };
        
            }
            componentDidMount() {
                this.getAll()
            }
        
            getAll() {
                this.setState({
                    loading:true
                })
                console.log('text');
                fetch('https://testingsiteweb.000webhostapp.com/api/channels', {
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
                        console.log("getAll :" + JSON.stringify(responseJson))
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
 
    navigatechannel() {
        this.props.navigation.navigate('TeledramaScreen')
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

    Test() {
        Alert.alert("Alert Is Working...")
    }
    navigateToTeledrama(id) {
        // Alert.alert(id+"")
        this.props.navigation.navigate('TeledramaScreen', {
            
            id: id
        });
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

                <Header style={{ marginTop: 5, backgroundColor: 'white', borderRadius: 10 }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.openDrawer()}>

                            <Icon name='menu' style={{ color: 'gray' }} />

                        </TouchableOpacity>

                    </Left>
                    <Body>

                        <TextInput
                            style={{ height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 10, }}
                            placeholder='Search here' />

                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => Alert.alert("search workinng")}>
                            <Icon name='search' style={{ color: 'gray' }} />
                        </TouchableOpacity>
 
                    </Right>
                </Header>


                <Spinner
                      name="three-bounce"
                       color="white"
                        //visibility of Overlay Loading Spinner
                        visible={this.state.loading}
                        //Text with the Spinner 
                        textContent={'Loading...'}
                        //Text style of the Spinner Text
                        textStyle={styles.spinnerTextStyle}
                    />
           
 
                <FlatGrid
                    itemDimension={130}
                    items={this.state.getall}
                    style={styles.gridView}
 
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => this.navigateToTeledrama(item.id)} activeOpacity={0.8}>
 
                            <View style={[styles.itemContainer, { backgroundColor:'white' }]}>
                                <Image style={{ width: 100, height: 100, top: 15, borderRadius: 10, left: 10 }} source={{ uri: 'https://testingsiteweb.000webhostapp.com/images/'+item.ch_Image}} />
                                <Text style={styles.itemName}>{item.ch_Name}</Text>
                               
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
    gridView: {
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        padding: 10,
        height: 130,
        width: 140,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 10.65,

        elevation: 6,
    },
    wrapper: {
        marginTop:30,
        flex: 1
    },
    itemName: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        fontSize: 16,
        color: '#6b6b47',
        fontWeight: '600',
        fontWeight: 'bold',
    },
    itemCode: {

        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
    spinnerTextStyle: {
        color: '#FFF',
      },
});