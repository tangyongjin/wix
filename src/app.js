
import {Platform,AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';
 

console.ignoredYellowBox =['Remote debugger'];
 
registerScreens();
registerScreenVisibilityListener();



global.Geolocation = require('Geolocation'); 

import './config/constants'


import  {  StoreInit ,StoreRefresh } from './mobx/StoreOp'
import { StartGPS } from  './tools/Geo' 

import {before_login ,after_login } from  './screens/auth/Route' 


StartGPS()
 



async function  AppRun() {
  try {
    const token = await AsyncStorage.getItem('access_token');
    if(token){
                console.log('已经登录 token is: ',token)
                 
                ConfigStore.setToken(token)
                // console.clear()

                console.log("======================>")
                
                console.log(API_ROOT,token)
                StoreRefresh( API_ROOT,token )

                after_login();
                }else{
                  console.log('没有登录')
                  before_login();
                }
  } catch (error) {
    // Handle errors here
    console.log(error)
    return error
  }
}  
 
 
 

AppRun()