import React from "react";

import { Image, View, TouchableOpacity ,Linking,Button} from "react-native";

import {
    Text,
    Container,
    Content,
} from "native-base";

import styles from './SideMenuScreemStyle'

   
  

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
    playstore(){
        Linking.openURL('https://play.google.com/store/apps/details?id=com.dramatv')
    }
aboutus(){
    Linking.openURL('https://commercialtp.com/about.php')
}
navigateRequest() {
    this.props.navigation.navigate('RequesScreen')
};
    render() {
        return (
            
            <Container >
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
                        <TouchableOpacity 
                        onPress={()=>this.navigateRequest()}
                        >
                            <View>
                                <View>
                                    <Text style={styles.txtLatest}>
                                        Request
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
                       
                    </View>
                    <View style={styles.SecondView}>

                    </View>
                    <View>

                        <View>
                            <Text style={styles.txtContactUs}>
                                Contact Us
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => this.aboutus()}>
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

                        <TouchableOpacity onPress={() => this.playstore()}>
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