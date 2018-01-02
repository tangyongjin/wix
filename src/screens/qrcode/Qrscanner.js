/**
 * Created by fuhuixiang on 2017-3-15.
 */
"use strict";
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
    TouchableOpacity
} from 'react-native';

import Camera from 'react-native-camera';
 
// var Sound = require('react-native-sound');
           


const RightCustomButton = ({text}) =>
  <TouchableOpacity
    style={[styles.buttonContainer]}
    onPress={()=>Navigation.handleDeepLink({link:"qrscan"})}
  >
    <View style={styles.button}>
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  </TouchableOpacity>;

  Navigation.registerComponent('CustomButton', () => RightCustomButton);


class QrCodePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moveAnim: new Animated.Value(0),
            Sound:require('react-native-sound'),
            transorder_url:''
        };
        
        console.log(this.state)

        console.log(this.props)

        this.title = '扫描二维码';
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        Animated.timing(
            this.state.moveAnim,//初始值
            {
                toValue: -200,
                duration: 1500,
                easing: Easing.linear
            }//结束值
        ).start(() => this.startAnimation());//开始
    };


    onBarCodeRead = (e: Code) => {
   


    if (this.state.transorder_url.length !== 0) {
      return undefined
    } 

    if (e && e.type === "QR_CODE" ) {
      return this.setState({
        transorder_url: e.data
      }, () => {
        
         this.state.Sound.setCategory('Playback');

         let sound = new this.state.Sound('qrcode.mp3', this.state.Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                } else {

                    sound.play();   
                    console.log(e.data)
                    this.props.onPassProp(e.data)
                    this.props.navigator.pop({
                          animated: true, // does the pop have transition animation or does it happen immediately (optional)
                          animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
                    });
                }
           });
      })
    }  
  }

    


    render() { 
    
        return (
            <View style={styles.container}>
                <Camera
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead.bind(this) }>
                    <View style={styles.rectangleContainer}>
                        <View style={styles.rectangle}/>
                        <Animated.View style={[
                            styles.border,
                            {transform: [{translateY: this.state.moveAnim}]}]}/>
                        <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
                    </View>
                </Camera>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    },
    rectangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 10
    },
    border: {
        flex: 0,
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
    }
});




export default QrCodePage;