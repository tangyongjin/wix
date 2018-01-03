import {Platform,AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';
 


 
registerScreens();
registerScreenVisibilityListener();



global.Geolocation = require('Geolocation'); 

import './config/constants'
import  {  StoreInit } from './mobx/StoreOp'
import { StartGPS } from  './tools/Geo' 

import {before_login ,after_login } from  './screens/auth/Route' 


StartGPS()
console.ignoredYellowBox =['Remote debugger'];

  

// const tabs_before_login = {
 
//   screen: 'Login',
//   title: 'Login',
//   navigatorStyle: {},
//   navigatorButtons: {},
//  };



// const tabs_after_login = [{
//   label: 'Navigation',
//   screen: 'example.Types',
//   icon: require('../img/list.png'),
//   title: 'Navigation Types',
// }, {
//   label: '运单',
//   screen: 'eureka.Transorders.Announce',
//   icon: require('../img/swap.png'),
//   title: '发布运单',
// }];


 
//   tabs_after_login.push(
//   {
//     label: '我的',
//     screen: 'Profile',
//     icon: require('../img/transform.png'),
//     title: 'Profile',
//   }
// ,
// {
//     label: '扫码',
//     screen: 'eureka.Transorders.Orderscan',
//     icon: require('../img/transform.png'),
//     title: '订单扫码',
//   }
//   );
 


// const  before_login=()=>{

//       Navigation.startSingleScreenApp({
//                       screen:tabs_before_login,
//                       animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
//                       tabsStyle: {
//                         tabBarBackgroundColor: '#003a66',
//                         tabBarButtonColor: '#ffffff',
//                         tabBarSelectedButtonColor: '#ff505c',
//                         tabFontFamily: 'BioRhyme-Bold',
//                       },
//                       appStyle: {
//                         tabBarBackgroundColor: '#003a66',
//                         navBarButtonColor: '#ffffff',
//                         tabBarButtonColor: '#ffffff',
//                         navBarTextColor: '#ffffff',
//                         tabBarSelectedButtonColor: '#ff505c',
//                         navigationBarColor: '#003a66',
//                         navBarBackgroundColor: '#003a66',
//                         statusBarColor: '#002b4c',
//                         tabFontFamily: 'BioRhyme-Bold',
//                         forceTitlesDisplay: true
//                       }
//                     });
// }

// const  after_login=()=>{

//    Navigation.startTabBasedApp({
//                         tabs:tabs_after_login,
//                         animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
//                         tabsStyle: {
//                           tabBarBackgroundColor: '#003a66',
//                           tabBarButtonColor: '#ffffff',
//                           tabBarSelectedButtonColor: '#ff505c',
//                           tabFontFamily: 'BioRhyme-Bold',
//                         },
//                         appStyle: {
//                           tabBarBackgroundColor: '#003a66',
//                           navBarButtonColor: '#ffffff',
//                           tabBarButtonColor: '#ffffff',
//                           navBarTextColor: '#ffffff',
//                           tabBarSelectedButtonColor: '#ff505c',
//                           navigationBarColor: '#003a66',
//                           navBarBackgroundColor: '#003a66',
//                           statusBarColor: '#002b4c',
//                           tabFontFamily: 'BioRhyme-Bold',
//                           forceTitlesDisplay: true
//                         },
//                         drawer: {
//                           left: {
//                             screen: 'example.Types.Drawer'
//                           }
//                         }
//                       });

// }




AsyncStorage.getItem("access_token")
.then( (token) =>
      {
         if(token){
                    console.log('已经登录')
                    after_login();
                  return 1
                  }else{
                    console.log('没有登录')
                    before_login();
                    return 0 
                  }
      }
).then( (flag) =>
    {
        console.log(flag)
        // console.log(ConfigStore)
        // ConfigStore.Configs.hello="boy"
        // console.log(ConfigStore)
        // registerScreens(flag)
        // let items=initNavitems();
        // console.log(items)
        // setupItems(items)

    }
)