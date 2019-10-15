import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight, StatusBar,
    TouchableNativeFeedback, TouchableWithoutFeedback, FlatList, Dimensions, SearchBar, ScrollView, TextInput
} from 'react-native';
import { Header, Item, Input, Footer, Drawer, Container, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import SideBar from '../SideMenuscreen/SideMenuScreen';





const items = [
    { name: 'Hamuwemu Aye', des: 'week Days 7.00-7.30', code: '#ffff', image: require('../../assest/Hamuwemu-Aye-Sansare-450x300.jpg') },
    { name: ' sangeethee', des: 'week Days 8.00-8.30', code: '#ffff', image: require('../../assest/san.jpg') },
    { name: 'Husmak Tharamata', des: 'week Days 7.00-7.30', code: '#ffff', image: require('../../assest/husmak-tharamata-450x300.jpg') },
    { name: "pawela", des: 'Weekends 7.30-8.30', code: "#fafafa", image: require('../../assest/pawela.jpg') },
    { name: 'Dewani Inima', des: 'week Days 9.00-9.30', code: '#ffff', image: require('../../assest/dewani.jpg') },
    { name: 'Sidu', des: 'week Days 7.30-8.00', code: '#ffff', image: require('../../assest/sidu.jpg') },
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
                            <Header style={{
                                marginTop: 35, backgroundColor: 'white', borderRadius: 10,marginTop:40, shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 8,
                                },
                                shadowOpacity: 0.46,
                                shadowRadius: 11.14,

                                elevation: 17,
                            }}>

                                <Left>
                                    <TouchableOpacity onPress={() => this.openDrawer()}>

                                        <Icon name='menu' style={{ color: 'gray' }} />

                                    </TouchableOpacity>

                                </Left>
                                <Body>
                                    <TextInput
                                        style={{ height: 50, borderColor: 'black', borderRadius: 20, width: 100, border: 10, shadowColor: "#000" }}

                                        placeholder='Search here' />

                                </Body>
                                <Right>
                                    <TouchableOpacity onPress={() => Alert.alert("search workinng")} style={{ marginRight: 10 }} >
                                        <Icon name='search' />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{}} onPress={() => Alert.alert("Liveworkinng")}>
                                        <Icon name='ios-disc' style={{ color: '#00cc44', }} >

                                            <Text style={{ fontSize: 14, color: 'black', }} >Live</Text>
                                        </Icon>
                                    </TouchableOpacity>

                                </Right>

                            </Header>
{/* 
                        </View>
                    </View> */}
                    {/* Body Content */}

                

                    <ScrollView>
                        <FlatGrid
                            itemDimension={270}
                            items={items}
                            style={styles.gridView}
                            renderItem={({ item, index }) => (
                                
                                <TouchableOpacity onPress={() => this.navigateTo_Episode()} >
                                   
                                    <View style={{ borderRadius: 50 }}>
                                 
                                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                           
                                       

                                                <Image style={{ width: 340, height: 250, borderRadius: 10 }} source={item.image} />



                                                <Text style={styles.itemName} style={{ left: 18, fontSize: 18, color: '#000', fontWeight: 'bold' }}>{item.name}</Text>
                                                <Text style={styles.itemName} style={{ left: 18, fontSize: 18, color: '#000' }}>{item.des}</Text>
                                               
                                            </View>
                                           
                                        </View>
                                     
                                </TouchableOpacity>
                               
                            )}
                        />
 </ScrollView>
            </Drawer>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    row: {
        left: 20,
        padding: 15,
        backgroundColor: 'white',
        width: 500,
        height: 80,
        marginTop: 50,
        borderRadius: 20,

    },
    itemContainer: {
        height: 250,
        width: 340,
        elevation: 5,
        marginTop: 50,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },




});

