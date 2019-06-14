
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  CameraRoll,
  Vibration,
  Linking,
  PermissionsAndroid

} from 'react-native';
import {RNCamera} from 'react-native-camera';
export default class CameraApp extends Component {
  state = {
    scanning: true,
  }

  scannedBarcode = (data) =>{
    this.setState({
      scanning: false
    });
    Linking.openURL(data.data).catch(err=>console.error("Error",err));
    return;
  }

  render() {



    return (
      <View style={styles.container}>
        <RNCamera
          ref={(cam) => {
            this.camera = cam;
          }}
          onBarCodeRead={this.scannedBarcode.bind(this)}
          style={styles.preview} >
         <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </RNCamera>
      </View>
    );
  }

    takePicture = async function () {

  		if (this.camera) {
        console.log("Hello");
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'My App Storage Permission',
          message: 'My App needs access to your storage ' +
            'so you can save your photos',
        },
      );
  			const options = {quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true};
  			const data = await this.camera.takePictureAsync(options);
  			console.log(data.uri);
        CameraRoll.saveToCameraRoll(data.uri);
  		}
  	}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('CameraApp', () => CameraApp);
