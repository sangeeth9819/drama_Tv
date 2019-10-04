import React, { Component } from 'react';
import { Image, TouchableOpacity, ImageBackground, StatusBar, View, AsyncStorage, Vibration, PixelRatio, Navigator, StyleSheet, Text, Alert, FlatList, Dimensions, TextInput } from 'react-native';
import {


    Header,
    Drawer,
    Fab,
    Button,
    Picker,
    Icon, Item, Input, Footer, value
} from 'native-base';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Animated from 'react-native-reanimated';
import SideBar from '../SideMenuscreen/SideMenuScreen'
import episode from '../EpisodeScreen/EpisodeScreen';
import play from '../PlayScreen/PlayScreen';
import Swipeable from 'react-native-gesture-handler/Swipeable';


import SortableGridView from 'react-native-sortable-gridview'
import { ScrollView } from 'react-native-gesture-handler';


const data = [
    { key: 'A' },
    { key: 'B' },
    { key: 'C' },
    { key: 'D' },
    { key: 'E' },
    { key: 'F' },
    { key: 'G' },
    { key: 'H' },
    { key: 'I' },
    { key: 'J' },
    { key: 'K' },
    { key: 'L' },
    { key: 'K' },
    { key: 'L' },
    { key: 'K' },
    { key: 'L' },
];

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




export default class Basic extends Component {


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


        };

    }

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
                


                {/* <Button


                        onPress={() => this.openDrawer()}
                        style={{ top: 30 }}
                    ></Button> */}



                <View>
                    <View>
                        {/* Head Content */}

                        <Header style={{ backgroundColor: 'white', borderRadius: 30, top: 28, height: 44 }}>
                            <TouchableOpacity onPress={() => this.openDrawer()} style={{ right: 10 }}>
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
                                    <View style={{ width: 250, height: 30, borderRadius: 20, backgroundColor: '#f5f5f0' }}>

                                        <TextInput
                                            style={{ left: 10, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 20, borderColor: '#FAFAFA' }}
                                            placeholder='Search here' />

                                    </View>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => Alert.alert("search workinng")} style={{ right: 0, left: 5 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <View style={{ width: 30, height: 50, borderRadius: 30 }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                            <Image style={{ width: 25, height: 25, top: 10 }} source={require('../../assest/search.png')} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </Header>


                        {/* Body Content */}
                        <View>
                            <ScrollView>
                                <View>

                                    <View>


                                        <FlatList
                                            data={formatData(data, numColumns)}
                                            style={styles.container}
                                            renderItem={this.renderItem}
                                            numColumns={numColumns}
                                        />

                                    </View>


                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    {/* footer Content */}

                    <Footer style={{ top: 580, backgroundColor: 'white', borderRadius: 10, borderColor: 'red', position: "absolute" }}>

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
                    </Footer>
                </View>
                </Drawer>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 5,
        top: 15,
        borderRadius: 30,

        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1.5,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#ffffff',
        flex: 1,
        height: 42,
        backgroundColor: '#ffffff',

        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#000000',
    },
});