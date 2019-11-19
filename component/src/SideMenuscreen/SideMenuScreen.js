import React from "react";

import { Image, View, TouchableOpacity ,Linking,Button,StatusBar} from "react-native";

import {
    Text,
    Container,
    Content,
} from "native-base";

import styles from './SideMenuScreemStyle'

   /////////////////////////////////////////////////////////////////////////////////////////////
/*Google analitic Data*/
/////////////////////////////////////////////////////////////////////////////////////////////
import {
    GoogleAnalyticsTracker,
    GoogleTagManager,
    GoogleAnalyticsSettings
  } from "react-native-google-analytics-bridge";
   
  // The tracker must be constructed, and you can have multiple:
  let tracker1 = new GoogleAnalyticsTracker("UA-12345-1");
  let tracker2 = new GoogleAnalyticsTracker("UA-12345-2");
   
  tracker1.trackScreenView("Request Screen");
  tracker1.trackEvent("Request Screen", "New");
  
  GoogleTagManager.openContainerWithId("GT-NZT48")
    .then(() => GoogleTagManager.stringForKey("pack"))
    .then(str => console.log("Pack: ", str));
  
  // The GoogleAnalyticsSettings is static, and settings are applied across all trackers:
  GoogleAnalyticsSettings.setDispatchInterval(30);
  // Setting `dryRun` to `true` lets you test tracking without sending data to GA
  GoogleAnalyticsSettings.setDryRun(true);
   
  // GoogleTagManager is also static, and works only with one container. All functions here are Promises:
  GoogleTagManager.openContainerWithId("GT-NZT48")
    .then(() => {
      return GoogleTagManager.stringForKey("pack");
    })
    .then(pack => {
      console.log("Pack: ", pack);
    })
    .catch(err => {
      console.log(err);
    });
   
  // You can also register Function Call tag handlers when the container is open.
  GoogleTagManager.registerFunctionCallTagHandler(
    "some_function", // Must be equal to Function Name field when the tag was configured.
    (functionName, tagArguments) => {
      // functionName is passed for convenience. In this example it will be equal to "some_function".
      // tagArguments is an object and is populated based on Tag configuration in TagManager interface.
      console.log("Handling Function Call tag:", functionName);
    }
  )
  
  export const setAppName = (Dramatv) => {
    tracker.setAppName(Dramatv);
   };
   export const Event = (Event) => {
    tracker.trackEvent("TouchableOpacity", "onPress");
   tracker.setAnonymizeIp(true);
   };
   export const setAppVersion = (setAppVersion) => {
    tracker.setAppVersion("1.4.5");
   };
  
   GoogleAnalyticsSettings.setDryRun(true);
  /**
  setDispatchInterval allows you to configure how often (in seconds) the batches are sent to your tracker.
  */
  //GoogleAnalyticsSettings.setDispatchInterval(parseInt(Config.GA_TRACKER_INTERVAL));
  /**
  Initialise the tracker based on the environment based tracker ID
  */
  //export const tracker = new GoogleAnalyticsTracker(Config.GA_TRACKER_ID,{CD_A: 1, CD_B: 2});
   
  GoogleTagManager.openContainerWithId("GT-NZT48")
    .then(() => GoogleTagManager.stringForKey("pack"))
    .then(str => console.log("Pack: ", str));
  
    GoogleTagManager.pushDataLayerEvent({
      event: "Side menu ",
      pageId: "/ Side menu  Screen"
    }).then(success => console.log(success));
  
    const dataLayerEvent = {
      event: "Side Menu",
      pageId: "/Side menu screen"
    };
  
    GoogleTagManager.pushDataLayerEvent(dataLayerEvent);
  
   
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  
  

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
    this.props.navigation.navigate('AboutusScreen')
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

                        {/* <TouchableOpacity onPress={() => this.navigatechannel()}>
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

                        </TouchableOpacity > */}
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

                        {/* <TouchableOpacity>
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
                        */}
                    </View>
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                
       
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

                        {/* <TouchableOpacity>
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

                        </TouchableOpacity > */}
                    </View>
                </Content>               
            </Container>

        );

    }

}