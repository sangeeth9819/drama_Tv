import React, { Component } from 'react';
 
import { Image } from 'react-native';
 
import { View, Text } from 'native-base';
 
import { StackActions, NavigationActions } from 'react-navigation'
 
import BackgroundTimer from 'react-native-background-timer';


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
    event: "Home",
    pageId: "/ Home Screen"
  }).then(success => console.log(success));

  const dataLayerEvent = {
    event: "Home ",
    pageId: "/Home screen"
  };

  GoogleTagManager.pushDataLayerEvent(dataLayerEvent);

///////////////////////////////////////////////////////////////////////////////////////////

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // animating: false,
      align: 'center',
      // alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function () {
          this.setState({
            // alignsecond: true,
          });
        }),
      1000
    );
  }
  componentDidMount() {
    this.test()
  }
 
  test() {
    const timeoutId = BackgroundTimer.setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'ChannelScreen' })
        ],
 
      });
      this.props.navigation.dispatch(resetAction);
 
    }, 2000);
  }
  render() {
    return (
 
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: "center",
          alignContent:"center",
          marginHorizontal: 110,
        }}
      >
        <Image
          source={require
            (
              '../../assest/original.png'
            )}
          style={{
            height: 100,
            width: 150,
          }}
        />
        
       
      </View>






        );
    }
}

