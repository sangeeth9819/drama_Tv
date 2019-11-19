import React, { Component } from 'react';
import { Header, Drawer, Left, Icon, Body, Right } from 'native-base';
import { Button, View, Text, StyleSheet,TouchableOpacity,TextInput,StatusBar,Image,Linking} from 'react-native';
import { showMessage } from 'react-native-flash-message';

 


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
   
  tracker1.trackScreenView("Auth Screen");
  tracker1.trackEvent("Loding Screen", "New");
  
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
    tracker.setAppVersion("1.3.2");
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
      event: "About",
      pageId: "/ About Screen"
    }).then(success => console.log(success));
  
    const dataLayerEvent = {
      event: "About ",
      pageId: "/About screen"
    };
  
    GoogleTagManager.pushDataLayerEvent(dataLayerEvent);
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  
export default class App extends Component {
    
    navigatechannel() {
         this.props.navigation.navigate('ChannelScreen')
     };
    render() {

        return (

            <View style={{ flex: 1, }}>

                <Header style={{ backgroundColor: 'white', borderRadius: 10,marginTop:25 }}>
                    <Left>

                        <TouchableOpacity onPress={() => this.navigatechannel()} style={{width:50,height:50,marginTop:10}}>

                            <Icon name='md-arrow-back' style={{ color: '#039be5' }} />

                        </TouchableOpacity>

                    </Left>
                    <Body>

                        <Text style={{ textAlign: "center", fontSize: 20, color: 'gray', justifyContent: "center", alignContent: "center", left: 30 }}>About Us</Text>

                    </Body>

                </Header>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                
       
                <View style={styles.container}>
                    <Image
                        style={{ width: 170, height: 100, bottom: 80, justifyContent: "center", alignItems: "center", }}
                        source={require('./../../assest/dramatvlogo.png')}
                    />
                    <View>

                        <Text style={{ fontSize: 20, color: '#424242', width: 320, bottom: 20, textAlign: "center" }}>
                            Drama Tv
                    </Text>
                        <Text style={{ fontSize: 15, color: '#424242', width: 330, textAlign: "center" }}>
                        DramaTV is an application designed to let you watch your favorite Sri Lankan teledramas, both by live streaming and catch up previous episodes together in one place, even when you travel far from home.
        Let our categorized streaming make your favorite TV times feel way better with the premium entertainment powered by   "Commercial Technologies Plus".
                    
                            </Text>

                        <Text style={{ fontSize: 12, color: '#424242', width: 320, top: 50, textAlign: "center", justifyContent: "center" }}>
                            A Product by
                    </Text>

                    </View>
                    <Image
                        resizeMode='cover'
                        style={{ width: 200, height: 90, justifyContent: "center", alignItems: "center", top: 30 }}
                        source={require('./../../assest/123.png')}
                    />


                    <Text style={{ color: 'blue', top: 50 }}
                        onPress={() => Linking.openURL('https://commercialtp.com')}>
                        Commercial Technologies
</Text>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F7F8',

    },
});
