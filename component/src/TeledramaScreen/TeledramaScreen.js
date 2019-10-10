import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight, StatusBar,
    TouchableNativeFeedback, TouchableWithoutFeedback, FlatList, Dimensions, SearchBar, ScrollView, TextInput
} from 'react-native';
import { Header, Item, Input, Footer, Drawer } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import SideBar from '../SideMenuscreen/SideMenuScreen';


const rows = [
    { id: 0, text: 'View' },
    { id: 1, text: 'Text' },
    { id: 2, text: 'Image' },
    { id: 3, text: 'ScrollView' },
    { id: 4, text: 'ListView' },
    { id: 5, text: 'ListView' },
]

const items = [
    { name: "pawela", code: "#ecf0f1", image: require('../../assest/pawela.jpg') },
    { name: ' Dewani Inima', code: '#ecf0f1', image: require('../../assest/dewaniinima.jpg') },
    { name: 'Sidu', code: '#ecf0f1', image: require('../../assest/sidu.jpg') },
    { name: 'Ad', code: '#ecf0f1', image: require('../../assest/ada.jpg') },
    { name: ' sangeethee', code: '#ecf0f1', image: require('../../assest/san.jpeg') },
    { name: 'Thodu', code: '#ecf0f1', image: require('../../assest/thodu.jpg') },
    

];

const extractKey = ({ id }) => id

export default class TeledramaScreen extends Component {


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

    openDrawer = () => {

        this.drawer._root.open()
    };

    onClose = () => {
        this.setState({
            showTheThing: true
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
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />


                <View style={{top:10}}  >
                    <Header style={{ backgroundColor: 'white', borderRadius: 30, top: 28, height: 44 }}>
                        <TouchableOpacity onPress={() => this.openDrawer()} style={{ right: 15, }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <View style={{ width: 50, height: 60, borderRadius: 20 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                        <Image style={{ width: 25, height: 25, top: 10 }} source={require('../../assest/menu.png')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', top: 5 }}>
                                <View style={{ width: 250, height: 30, borderRadius: 15, backgroundColor: '#f5f5f0' }}>

                                    <TextInput
                                        style={{ left: 10, height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: '#FAFAFA' }}
                                        placeholder='Search here' />

                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Alert.alert("search workinng")} style={{ right: 0, left: 5 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <View style={{ width: 30, height: 50, borderRadius: 30 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                        <Image style={{ width: 25, height: 25, top: 8 }} source={require('../../assest/search.png')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </Header>

                </View>

                {/* Body Content */}
                <View style={{ top: 50, borderRadius: 20 }}>
                    <ScrollView>
                        <FlatGrid





                            itemDimension={230}
                            items={items}
                            style={styles.gridView}
                            // staticDimension={300}
                            // fixed
                            // spacing={20}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => this.navigateTo_Episode()}>
                                    <View style={{ borderRadius: 30 }}>
                                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>

                                            <Image style={{ width: 150, height: 130, top: 10, borderRadius: 20, left: 10 }} source={item.image} >

                                            </Image>
                                            <Text style={styles.itemName} style={{ left: 180 ,bottom:80,fontSize:24}}>{item.name}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </ScrollView>
                
                </View>
                {/* footer Content */}

                {/* <Footer style={{ top: 588, backgroundColor: 'white', borderRadius: 10, borderColor: 'red', position: "absolute" }}>

                    <TouchableOpacity onPress={() => Alert.alert("Home workinng")} style={{ right: 85 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                            <View style={{ width: 50, height: 50, borderRadius: 30 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <Image style={{ width: 35, height: 35, top: 5, right: 10 }} source={require('../../assest/home.png')} />

                                </View>
                                <Text style={{ color: 'gray' }}>Home</Text>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Alert.alert("Home workinng")} style={{}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                            <View style={{ width: 50, height: 50, borderRadius: 30 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <Image style={{ width: 35, height: 35, top: 5, right: 10 }} source={require('../../assest/home.png')} />

                                </View>
                                <Text style={{ color: 'gray' }}>Home</Text>
                            </View>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => Alert.alert("Home workinng")} style={{ left: 100 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                            <View style={{ width: 50, height: 50, borderRadius: 30 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <Image style={{ width: 35, height: 35, top: 5, right: 10 }} source={require('../../assest/home.png')} />

                                </View>
                                <Text style={{ color: 'gray' }}>Home</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Footer> */}
                
                 </Drawer>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        left: 20,
        padding: 15,
        margin: 50,
        marginBottom: 5,
        backgroundColor: 'white',
        width: 500,
        height: 80,
        borderRadius: 20,

    },
})