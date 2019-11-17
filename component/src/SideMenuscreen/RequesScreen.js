import React, { Component } from 'react';
import { Header, Drawer, Left, Icon, Body, Right } from 'native-base';
import { Button, View, Text, StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
 

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
    event: "Request Channel",
    pageId: "/ Request Screen"
  }).then(success => console.log(success));

  const dataLayerEvent = {
    event: "Request Channel",
    pageId: "/Request screen"
  };

  GoogleTagManager.pushDataLayerEvent(dataLayerEvent);

 
///////////////////////////////////////////////////////////////////////////////////////////


export default class App extends Component {

  

  state = {
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false,
  };

  constructor(props) {
    super(props)
    this.state = {
     TeledramaName:'',
     ChanelName:'',
    };

  }
  clearText() {
    this.setState({
     TeledramaName:null,
     ChanelName:null,
    });

  }
  navigatechannel() {
          this.props.navigation.navigate('ChannelScreen')
        };
 

  validation() {
    if (this.state.TeledramaName == '') {
      showMessage({
        description: "Empty Message",
        message: "TeledramaName Filed Is Empty",
        type: "warning",
      })
    }else if (this.state.ChanelName === '') {
      showMessage({
        description: "Empty Massage",
        message: "ChanelName Field Is Empty",
        type: "warning",
      })
    } else {
      showMessage({
        description: "Done",
        message: "Successfully ",
        type: "success",
      })
      

    }
    this.setState({
                  
        scaleAnimationDialog: true,
        });
  }
 
  render() {
    return (

                    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        
                        <Header style={{ marginTop: 30, backgroundColor: 'white', borderRadius: 10 }}>
                            <Left>
                                <TouchableOpacity onPress={() => this.navigatechannel()}>
        
                                    <Icon name='md-arrow-back' style={{ color: '#039be5' }} />
        
                                </TouchableOpacity>
        
                            </Left>
                            <Body>
        
                                <Text style={{ textAlign: "center", fontSize: 20, color: 'gray' }}>Request Form</Text>
        
                            </Body>
        
                        </Header>
                        <View style={styles.container}>
                            <View>
                            <Text style={{ fontSize: 15, color: '#424242', width: 320, bottom: 150 }}>
                                Couldn't find your favourite Teledrama ?
                            </Text>
                            <Text style={{ fontSize: 15, color: '#424242', width: 320, bottom: 130 }}>
        
                                Please send a request us about your favourite show.we'll add it soon.
                            </Text>
                            </View>
                           
                            <Text style={{ fontSize: 25, bottom: 100 }}>
                                Channel
                            </Text>
                            <TextInput placeholder='channel name' 
                              onChangeText={data =>
                                this.setState({
                                  ChanelName: data
                                })} value={this.state.ChanelName}
                            style={{ borderBottomColor: 'green', borderBottomWidth: 3, width: 300, bottom: 100 }}>

                            </TextInput >
                            <Text style={{ fontSize: 25, marginTop: 20, bottom: 100 }}>
                                Teledrama
                            </Text>
                            <TextInput placeholder='teledrama name'
                             style={styles.Input}
                             onChangeText={data =>
                               this.setState({
                                 TeledramaName: data
                               })} value={this.state.TeledramaName}
                            style={{ borderBottomColor: 'green', borderBottomWidth: 3, width: 300, bottom: 100 }}>
        
                            </TextInput>
 
          <Button
            title="confirm request"
            onPress={() => this.validation()}
          />
        </View>
        <Dialog
          onTouchOutside={() => {
            this.setState({ scaleAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.scaleAnimationDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            console.log('onHardwareBackPress');
            this.setState({ scaleAnimationDialog: false });
            return true;
          }}
          dialogTitle={
            <DialogTitle
              title="Drama tv" 
              hasTitleBar={false}
            />
          }
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                  
                this.setState({ scaleAnimationDialog: false });
              }}
              key="button-1"
            />,
          ]}>
          <DialogContent>
            <View>
              <Text>
               Ok we will full-fill your request As Soon As
              </Text>
              <Button
                title="Ok"
                onPress={() => {
                    this.clearText()
                  this.setState({ scaleAnimationDialog: false });
                }}
                key="button-1"
              />
            </View>
          </DialogContent>
        </Dialog>    
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});