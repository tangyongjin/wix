import React from 'react';
import   {
  Component,
  ScrollView,Button,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Platform,
  Text,
  View
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import * as AppConstClass from '../../config/constants';

import {before_login ,after_login } from  '../auth/Route' 

const ACCESS_TOKEN = AppConstClass.ACCESS_TOKEN;

import { observer, inject } from "mobx-react";
@observer

class Profile extends React.Component {

	


  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  async deleteToken() {
    try {
        await AsyncStorage.removeItem(ACCESS_TOKEN)
    } catch(error) {
        console.log("Something went wrong");
    }
  }
      

  onLogout(){
    // this.setState({showProgress: true})
    this.deleteToken();
  }

  


      
restartApp(){
  before_login()
}
    

render() {
    return (
       <View style={styles.container}>
        <Text style={styles.title}>Profile </Text>
        <View style={styles.button}>
          <Button onPress= { this.restartApp.bind(this) }   title="        退出       " />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },

  button: {
    height: 50,
   
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  
  title: {
    fontSize: 25,
    marginBottom: 15
  }
});



export default Profile;
