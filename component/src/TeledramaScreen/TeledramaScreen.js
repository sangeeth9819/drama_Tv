import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight,
    TouchableNativeFeedback, TouchableWithoutFeedback, FlatList, Dimensions, SearchBar,ScrollView,TextInput
} from 'react-native';
import { Header, Item, Input, Footer, } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';


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
    { name: 'Adarei mn', code: '#ecf0f1', image: require('../../assest/ada.jpg') },
    { name: ' Eye Chanenne', code: '#ecf0f1', image: require('../../assest/san.jpeg') },
    // { name: 'Sirasa Tv', code: '#ecf0f1', image: require('../../assest/') },
    // { name: 'Hiru Tv', code: '#ecf0f1', image: require('../../assest/') },
    // { name: 'aa', code: '#ecf0f1', image: require('../../assest/') },

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


    render() {
        return (
            <View>

                {/* Head Content */}
                <Header style={{ backgroundColor: 'white', borderRadius: 30, top: 40, height: 44 }}>
                            <TouchableOpacity onPress={() => Alert.alert("menu working")} style={{ right: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <View style={{ width: 50, height: 60, borderRadius: 20 }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                            <Image style={{ width: 30, height: 35, top: 10 }} source={require('../../assest/menu.png')} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>





                            <TouchableOpacity>
                                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', top: 5 }}>
                                    <View style={{ width: 250, height: 30, borderRadius: 20, backgroundColor: '#f5f5f0' }}>

                                        <TextInput
                                            style={{ left: 10, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 20, borderColor: '#FAFAFA' ,left:55}}
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

              

                {/* Body Content */}
                <View style={{ top: 35, borderRadius: 20 }}>
                    <ScrollView>
                    <FlatGrid



 

itemDimension={130}
items={items}
style={styles.gridView}
// staticDimension={300}
// fixed
// spacing={20}
renderItem={({ item, index }) => (
    <TouchableOpacity onPress={() => this.navigatechannel()}>
        <View style={{ borderRadius: 30 }}>
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Image style={{ width: 150, height: 130, top: 10, borderRadius:20,left:10 }} source={item.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                {/* <Text style={styles.itemCode}>{item.code}</Text> */}
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
            </View>
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
        marginBottom: 5,
        backgroundColor: 'white',
        width: 500,
        height: 80,
        borderRadius: 20,

    },
})