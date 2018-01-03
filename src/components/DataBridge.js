import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import DeepClone from 'lodash';
import { Plainlist } from './Plainlist';
import  Alist from './Alist';

 
export default class DataBridge extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props)
      
  }
 

  componentWillMount() {
    navigator = this.props.navigator;
  }
 
   
   

  render() {
    let listoptions =ConfigStore.Configs[this.props.dskey] 
    
    return (
      <ScrollView style={styles.container}>
        <Alist  field_text={this.props.field_text} dbfield={this.props.dbfield}  field_id={this.props.field_id}   cfgdata={listoptions} />
      </ScrollView>
    );
  }
 

}

 
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#ffffff',
  }

});

 




