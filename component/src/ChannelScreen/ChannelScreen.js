import React, { Component } from 'react';
import {
    Image, TouchableOpacity, ImageBackground, StatusBar,
    View, AsyncStorage, Vibration, PixelRatio, Navigator, StyleSheet,
    Text, Alert, FlatList, Dimensions, TextInput
} from 'react-native';
import {

    Header,
    Drawer,
    Fab,
    Button,
    Picker,
    Icon, Item, Input, Footer, value
} from 'native-base';
import { createAppContainer } from "react-navigation";
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Animated from 'react-native-reanimated';
import SideBar from '../SideMenuscreen/SideMenuScreen';
import episode from '../EpisodeScreen/EpisodeScreen';
import play from '../PlayScreen/PlayScreen';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FlatGrid } from 'react-native-super-grid';

import SortableGridView from 'react-native-sortable-gridview'
import { ScrollView } from 'react-native-gesture-handler';

import { createStackNavigator } from 'react-navigation-stack';

 
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

        };

    }
    //     navigatechannel(value){
    //    this.state({

    //    })
    //     }

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




    render() {
        const items = [
            { name: "Swarna wahini", code: "#ecf0f1", image: require('../../assest/Swarnavahini_logo.png') },
            { name: 'siyath Tv', code: '#ecf0f1', image: require('../../assest/siysthaTv.png') },
            { name: 'Tv Deran', code: '#ecf0f1', image: require('../../assest/deranaTv.png') },
            { name: 'Jathika Rupawahini', code: '#ecf0f1', image: require('../../assest/nationalTv.png') },
            { name: ' Eye Chanenne', code: '#ecf0f1', image: require('../../assest/eyechannelTv.png') },
            { name: 'Sirasa Tv', code: '#ecf0f1', image: require('../../assest/sirasa-logo.jpg') },
            { name: 'Hiru Tv', code: '#ecf0f1', image: require('../../assest/hiruTv.jpg') },
            { name: 'aa', code: '#ecf0f1', image: require('../../assest/hiruTv.jpg') },

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
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />



                <View>
                    <View>
                        {/* Head Content */}
 
                   <Header style={{ backgroundColor: 'white', borderRadius: 30, top: 45, height: 44 }}>
                            <TouchableOpacity onPress={() => this.openDrawer()} style={{ right: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <View style={{ width: 50, height: 60, borderRadius: 20 }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                            <Image style={{ width: 30, height: 30, top: 10 }} source={require('../../assest/menu.png')} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>





                            <TouchableOpacity>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', top: 5 }}>
                                    <View style={{ width: 250, height: 30, borderRadius: 20, backgroundColor: '#f5f5f0' }}>

                                        <TextInput
                                            style={{ left: 10, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 20, borderColor: '#FAFAFA',left:55 }}
                                            placeholder='Search here' />

                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => Alert.alert("search workinng")} style={{ right: 0, left: 5 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <View style={{ width: 30, height: 50, borderRadius: 30 }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                            <Image style={{ width: 30, height: 30, top: 10 }} source={require('../../assest/search.png')} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </Header>

                    </View>
                    {/* Body Content */}
                    <View>
                        <ScrollView>
                            <View>

                                <View>
 
                                   
                                    <View style={{ top: 50 }}>
                                        <ScrollView>
                                            <FlatGrid



 

                                                itemDimension={130}
                                                items={items}
                                                style={styles.gridView}
                                            
                                                renderItem={({ item, index }) => (
                                                    <TouchableOpacity onPress={() => this.navigatechannel()}>
                                                        <View style={{ borderRadius: 30 }}>
                                                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                                                <Image style={{ width: 150, height: 130, top: 16, borderRadius: 10 }} source={item.image} />
                                                                <Text style={styles.itemName}>{item.name}</Text>
                                                                {/* <Text style={styles.itemCode}>{item.code}</Text> */}
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                )}
                                            />
                                        </ScrollView>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
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
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        top: 10,
        left: 10,
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
});