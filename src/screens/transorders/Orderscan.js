import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  NativeModules,
  Alert
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import Transorderdetail from './Transorderdetail'
import {Icon,Divider,  FormLabel,FormInput } from 'react-native-elements';
 
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

  class Orderscan extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
        passedData:null
    };
  }  


  static navigatorButtons = {
    rightButtons: [
      {
        id: 'custom-button-111',
        component: 'CustomButton',
        disabled:false,
        passProps: {
          text: '+' 
        }
      }
    ]
  };
 
    
 
  componentWillMount() {
    navigator = this.props.navigator;
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

 

  onNavigatorEvent(event) {

     if(event.link==='qrscan'){
       this.props.navigator.push({
          screen: 'Qrscanner',
          title: '扫描',
          passProps: {
            onPassProp: (data) => {
              this.setState({passedData: data})  //强制订单详情进行重新渲染.
              this.forceUpdate()

            }
          }
       });
     }
  }
  
  
  getLocation() {

      
      Geolocation.getCurrentPosition(
        location => {
              var result = "速度：" + location.coords.speed +
                          "\n经度：" + location.coords.longitude +
                          "\n纬度：" + location.coords.latitude +
                          "\n准确度：" + location.coords.accuracy +
                          "\n行进方向：" + location.coords.heading +
                          "\n海拔：" + location.coords.altitude +
                          "\n海拔准确度：" + location.coords.altitudeAccuracy +
                          "\n时间戳：" + location.timestamp;
              alert(result);
              
              let gps={coords:location.coords,timestamp:location.timestamp}
              
              let email = "joe@example.com";  
              let password = "donkeybrains";  
              let usersPath = "receviegps"
              
              fetch(API_ROOT+'transorder/receviegps', {  
                method: 'POST',
                body: JSON.stringify({
                  gps
                })
              })





          },
          error => {
            alert("获取位置失败："+ error)
          }
      );
}
 


 render() {
    return (
      <View style={styles.container}>
        <Text>
            订单详情:
            {this.state.passedData } 
        </Text> 
          <Transorderdetail   unamx={'alex'}  transorder_serial={this.state.passedData }  ></Transorderdetail>
      </View>
    );
}

componentWillUnmount() {

    // JPushModule.removeReceiveCustomMsgListener();
    // JPushModule.removeReceiveNotificationListener();
    // navigator = null;
  }

}


export default   Orderscan

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  buttonContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    backgroundColor: 'tomato',
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
