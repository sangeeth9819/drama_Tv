import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight,
    TouchableNativeFeedback, TouchableWithoutFeedback, FlatList, Dimensions, SearchBar
} from 'react-native';
import { Header, Item, Input, Footer, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const rows = [
    { id: 0, text: 'View' },
    { id: 1, text: 'Text' },
    { id: 2, text: 'Image' },
    { id: 3, text: 'ScrollView' },
    { id: 4, text: 'ListView' },
    { id: 5, text: 'ListView' },
]

const extractKey = ({ id }) => id

export default class EpisodeScreen extends Component {


    renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }


    render() {
        return (
            <View>


                {/* Head Content */}
                {/* <Header style={{ backgroundColor: 'white', borderRadius: 30, top: 5, height: 44 }}> */}

                    {/* <TouchableOpacity onPress={() => Alert.alert("menu working")} style={{ right: 15 }}>
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
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <Item>
                                        <Input style={{ textDecorationStyle: null, width: 100, height: 38 }} placeholder='search here'
                                        ></Input>
                                    </Item>
                                </View>
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
                    </TouchableOpacity> */}

                {/* </Header> */}

                {/* Body Content */}
                <View style={{ top: 20, borderRadius: 20 }}>
                    <ScrollView>
                        <FlatList
                            style={styles.container}
                            data={rows}
                            renderItem={this.renderItem}
                            keyExtractor={extractKey}
                            // spacing={20}
                            renderItem={({ row }) => (
                                <View style={{ ackgroundColor: 'white', margin: 2, borderRadius: 20, borderColor: 'gray', borderWidth: 0.5 }}>
                                    <Image style={{ height: 100, width: 100, backgroundColor: 'white', borderRadius: 20 }} source={{ uri: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg' }} >


                                    </Image>

                                </View>
                            )}
                        />
                    </ScrollView>
                </View>
                {/* footer Content */}

                <Footer style={{ top: 560, backgroundColor: 'white', borderRadius: 10, borderColor: 'red', position: "absolute" }}>

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
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        left: 15,
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'white',
        width: 340,
        height: 80,
        borderRadius: 20,

    },
})