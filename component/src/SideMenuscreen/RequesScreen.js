// import React, { Component } from 'react';

// import {
//     Text, View, Image, TouchableOpacity, Alert, StatusBar, Dimensions, TextInput, ImageBackground, StyleSheet, Button, ButtonGroup
// } from 'react-native';

// import { Header, Drawer, Left, Icon, Body, Right } from 'native-base';
// export default class Request extends Component {
//    
//     render() {

//         return (

//             <View style={{ flex: 1, backgroundColor: 'transparent' }}>

//                 <Header style={{ marginTop: 30, backgroundColor: 'white', borderRadius: 10 }}>
//                     <Left>
//                         <TouchableOpacity onPress={() => this.navigatechannel()}>

//                             <Icon name='md-arrow-back' style={{ color: '#039be5' }} />

//                         </TouchableOpacity>

//                     </Left>
//                     <Body>

//                         <Text style={{ textAlign: "center", fontSize: 20, color: 'gray' }}>Request Form</Text>

//                     </Body>

//                 </Header>
//                 <View style={styles.container}>
//                     <View>
//                     <Text style={{ fontSize: 15, color: '#424242', width: 320, bottom: 150 }}>
//                         Couldn't find your favourite Teledrama ?
//                     </Text>
//                     <Text style={{ fontSize: 15, color: '#424242', width: 320, bottom: 130 }}>

//                         Please send a request us about your favourite show.we'll add it soon.
//                     </Text>
//                     </View>
                   
//                     <Text style={{ fontSize: 25, bottom: 100 }}>
//                         Channel
//                     </Text>
//                     <TextInput placeholder='channel name' style={{ borderBottomColor: 'green', borderBottomWidth: 3, width: 300, bottom: 100 }}>

//                     </TextInput >
//                     <Text style={{ fontSize: 25, marginTop: 20, bottom: 100 }}>
//                         Teledrama
//                     </Text>
//                     <TextInput placeholder='teledrama name' style={{ borderBottomColor: 'green', borderBottomWidth: 3, width: 300, bottom: 100 }}>

//                     </TextInput>
//                     <Button
//                         title="Request ok"
//                         type="outline"
//                     />


//                 </View>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#F7F7F8',


//     },
// });

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
            // onPress={() => {
                
            //   this.setState({
                  
            //     scaleAnimationDialog: true,
            //   });
          
           // }}
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