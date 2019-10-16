import React from "react";
import { AppRegistry, Image, StatusBar, View, TouchableOpacity } from "react-native";
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon,
    Left
} from "native-base";

import styles from './SideMenuScreemStyle'

// const routes = ["Home", "Category", "Latest", "Favourite", "Request Drama", "Aboutus", "Rate App", "Help"];

export default class SideBar extends React.Component {
    navigatechannel() {
        this.props.navigation.navigate('ChannelScreen')
    };
    navigateHome() {
        this.props.navigation.navigate('AuthScreen')
    };
    navigateTele() {
        this.props.navigation.navigate('TeledramaScreen')
    };
   
    render() {
        return (



            <Container>
                <Content >
                    <View style={styles.AllView}>
                    </View>

                    <Image
                        square
                        style={styles.logoImage}
                        source={require
                            (
                                '../../assest/original.png'
                            )}
                    />

                    <View>



                        <TouchableOpacity onPress={() => this.navigateHome()}>
                            <View>
                                <View>
                                    <Text style={styles.txtHome}>
                                        Home
                                </Text>
                                    <Image
                                        style={styles.imageHome}
                                        source={require
                                            (
                                                '../../assest/icons8-home-52.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >

                        <TouchableOpacity onPress={() => this.navigatechannel()}>
                            <View>
                                <View>
                                    <Text style={styles.txtCategory}>
                                        Category
                                </Text>
                                    <Image
                                        style={styles.imagectegory}
                                        source={require
                                            (
                                                '../../assest/icons8-star-48.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >
                        <TouchableOpacity>
                            <View>
                                <View>
                                    <Text style={styles.txtLatest}>
                                        Latest
                                </Text >
                                    <Image
                                        style={styles.imagectegory}
                                        source={require
                                            (
                                                '../../assest/icons8-close-up-48.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >

                        <TouchableOpacity>
                            <View>
                                <View>
                                    <Text style={styles.txtFavourite}>
                                        Favourite
                                </Text>
                                    <Image
                                        style={styles.imagectegory}
                                        source={require
                                            (
                                                '../../assest/icons8-heart-48.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => this.navigatechannel()}>
                            <View>
                                <View>
                                    <Text style={styles.txtRequestdrama}>
                                        Live TV
                                </Text>
                                    <Image
                                        style={styles.imagectegory}
                                        source={require
                                            (
                                                '../../assest/icons8-video-camera-48.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >
                    </View>
                    <View style={styles.SecondView}>

                    </View>
                    <View>

                        <View>
                            <Text style={styles.txtContactUs}>
                                Contact Us
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <View>
                                <View>
                                    <Text style={styles.AboutUs}>
                                        About Us
                                </Text>
                                    <Image
                                        style={styles.imagectegory}
                                        source={require
                                            (
                                                '../../assest/icons8-high-importance-48.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >

                        <TouchableOpacity>
                            <View>
                                <View>
                                    <Text style={styles.rateApp}>
                                        Rate App
                                </Text>
                                    <Image
                                        style={styles.imagectegory}
                                        source={require
                                            (
                                                '../../assest/icons8-topic-push-notification-48.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >

                        <TouchableOpacity>
                            <View>
                                <View>
                                    <Text style={styles.txtHelp}>
                                        Help
                                </Text>
                                    <Image
                                        style={styles.imagectegory}
                                        source={require
                                            (
                                                '../../assest/icons8-help-60.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >



                    </View>
                </Content>
            </Container>

        );
       
    }
   
}