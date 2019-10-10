import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight,
    TouchableNativeFeedback, TouchableWithoutFeedback, FlatList, Dimensions, SearchBar, ScrollView, TextInput, StatusBar
} from 'react-native';
import { Header, Item, Input, Footer, Drawer } from 'native-base';
import SideBar from '../SideMenuscreen/SideMenuScreen';



const rows = [
    { id: 0, text: 'View' },
    { id: 1, text: 'Text' },
    { id: 2, text: 'Image' },
    { id: 3, text: 'ScrollView' },
    { id: 4, text: 'ListView' },
    { id: 5, text: 'ListView' },
]

const extractKey = ({ id }) => id


export default class TeledramaScreen extends Component {


    renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }
    navigateEpisode() {
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
                <View style={{ top: 35, borderRadius: 20 }}>
                    <ScrollView>
                        <FlatList
                            style={styles.container}
                            data={rows}
                            renderItem={this.renderItem}
                            keyExtractor={extractKey}
                            // spacing={20}

                            renderItem={({ row }) => (
                                <TouchableOpacity onPress={() => this.navigateEpisode()}>
                                    <View style={{ ackgroundColor: 'white', margin: 2, borderRadius: 20, borderColor: 'gray', borderWidth: 0.5 }}>
                                        <Image style={{ height: 100, width: 100, backgroundColor: 'white', borderRadius: 20 }} source={{ uri: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg' }} >


                                        </Image>

                                    </View>
                                </TouchableOpacity>

                            )}
                        />
                    </ScrollView>
                </View>
                {/* footer Content */}
            </Drawer>

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