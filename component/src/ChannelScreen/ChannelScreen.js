import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight, StatusBar,
    TouchableNativeFeedback, TouchableWithoutFeedback, FlatList, Dimensions, SearchBar, ScrollView, TextInput
} from 'react-native';
import { Header, Item, Input, Footer, Drawer } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import SideBar from '../SideMenuscreen/SideMenuScreen';
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


    Test() {
        Alert.alert("Alert Is Working...")
    }


    render() {
        const items = [
            { name: '   National Tv', code: '#ffffff', image: require('../../assest/nationalTv.png') },
            { name: '         ITN', code: '#ffffff', image: require('../../assest/itnTv.jpg') },
            { name: "Swarna wahini", code: "#ffffff", image: require('../../assest/Swarnavahini_logo.png') },
            { name: '    siyath Tv', code: '#ffffff', image: require('../../assest/siyathaTv.png') },
            { name: '        Tv 1', code: '#ffffff', image: require('../../assest/tv1Tv.png') },
            { name: '       Sirasa Tv', code: '#ffffff', image: require('../../assest/sirasaTv.jpg') },
            { name: 'Hiru Tv', code: '#ffffff', image: require('../../assest/hiruTv.jpg') },

            { name: 'Tv Deran', code: '#ffffff', image: require('../../assest/deranaTv.png') },

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
                <View style={{ backgroundColor: '#f5f5f0' }}>

                    <View style={{ top: 10 }}  >
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
                                                    <View style={{}}>
                                                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                                            <Image style={{ width: 100, height: 100, top: 15, borderRadius: 10, left: 10 }} source={item.image} />
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
        borderRadius: 20,
        shadowColor: "#0000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 10.65,

        elevation: 6,

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