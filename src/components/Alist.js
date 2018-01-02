'use strict';

import {observable, autorun,computed} from 'mobx';
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
  NativeModules,
  Alert
} from 'react-native';

import {Icon,Divider,  FormLabel,FormInput } from 'react-native-elements';


  class   Alist extends React.Component
{

  constructor(props){
    super(props);
    
    console.log(this.props)

    this.state = {
      selectedOption: null,
      selectedIndex: -1,
    };

  }
  
    renderOneRow( option, selected, onSelect, index) {

      const textStyle = {
        paddingTop: 10,
        paddingLeft: 24,
        paddingBottom: 10,
        color: 'black',
        flex: 1,
        fontSize: 14,
      };

      const baseStyle = {
        flexDirection: 'row',
        borderTopWidth: 1,
      };

      var style;
      var checkMark;

      if (index > 0) {
        style = [baseStyle, {
          borderTopColor: '#eeeeee',
          borderTopWidth: 1,
          backgroundColor:'white',
        }];
      } 

      if (selected) {
        checkMark = <Text style={{
          flex: 0.1,
          color: 'red',
          fontWeight: 'bold',
          paddingTop: 8,
          fontSize: 20,
          alignSelf: 'center',
        }}>✓</Text>;
      }

      return (                   
        <TouchableWithoutFeedback onPress={() => this.selectOne(index,option)} key={index}>
          <View style={style}>
            <Text style={textStyle}>{option}</Text>
               { this.renderMark( this.state.selectedIndex, {index} ) }

          </View>
        </TouchableWithoutFeedback>
      );
    }

  
  renderMark( selectedIndex,index){
     if(selectedIndex === index.index){
      return (
      <Text style={{
          flex: 0.1,
          color: 'red',
          fontWeight: 'bold',
          paddingTop: 8,
          fontSize: 20,
          alignSelf: 'center',
        }}>✓</Text>
        )

     }else
     {
     return null;
     }
  }


  selectOne(index,option){
 
    //取消选择 


     AnnounceStore.set22(option)

   
    if( this.state.selectedIndex ==index){

        ConfigStore.Configs.hello=option
        // ConfigStore.Configs.announce.dest_id=-1;
        // ConfigStore.Configs.announce.dest_text=null;


       this.setState({
           selectedOption: null,
           selectedIndex: -1
          });

    }else
    {
        
        this.setState({
           selectedOption: option,
           selectedIndex: index
          });
     
     ConfigStore.Configs.hello=option
     // ConfigStore.Configs.announce.dest_id=index;
     // ConfigStore.Configs.announce.dest_text=option;

    }
 
  }

  render() {
    
    return ( 
           <ScrollView style={styles.container}>
             <View style={{flex: 1}}>
            <View  style={{marginTop: 10, backgroundColor: 'white'}}>


            <View style={{flexDirection:'row',justifyContent : 'space-between'}}  >
                          <Text style={{padding: 16, fontSize:16,fontWeight:'bold'}}>选择</Text>
                           <Icon
                              style={{flex:0}}
                              raised
                              name='plus'
                              type='font-awesome'
                              color='#f50' 
                              size={15}
                              onPress={this.getLocation }
                           />



            </View>


              <View style={{
                backgroundColor: '#eeeeee',
                paddingTop: 5,
                paddingBottom: 5,
              }}>


               <View style={{flexDirection:'row'}}  >
                <Text style={{
                  color: '#555555',
                  paddingLeft: 16,
                  marginBottom: 5,
                  marginTop: 12,
                  fontSize: 15,
                }}>列表</Text>

                <Icon
                              style={{flex:0}}
                              raised
                              name='download'
                              type='font-awesome'
                              color='#550' 
                              size={12}
                              onPress={this.getLocation }
                           />
                </View>
                 { this.props.cfgdata.map((item) =>  this.renderOneRow( item.value, false, null, item.key) ) }

              </View>
              <Text style={{
                marginTop:10,
                marginLeft:22,

              }}>
              
               当前选择:{this.state.selectedOption}

              </Text>
            </View>
          </View>
         </ScrollView>
       )
    }
}

export default Alist


const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#ffffff',
  },

});

 