import React from 'react';
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

import {Navigation} from 'react-native-navigation';
 
import {Icon,  FormLabel,FormInput } from 'react-native-elements';
  
import {observable, autorun,computed} from 'mobx';
 
import { observer } from 'mobx-react';

 

@observer

class Announce extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            passedData:null
        };
  }

  componentWillMount() {
    navigator = this.props.navigator;
  }


  componentDidMount() {
    ConfigStore.setFoo();

        // this.props.ds.set22('outside')



  }

 
 onPopPressed = () => {
       
       console.log(this.in_out_cfg)
        
       this.props.navigator.push({
          screen: 'DataBridge',
          title: '选择收货地点',
          passProps:this.in_out_cfg
       });
  }


  

 _onPressSave = () => {

  console.log(AnnounceStore)
  console.log(ConfigStore)

}

 
 render() {
    return (

      <ScrollView style={styles.container}>

     

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >运输计划号</FormLabel>

        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >发货地点</FormLabel>

        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

    
      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >收货地点</FormLabel>
       <TouchableWithoutFeedback style={styles.fullWidthButton} ref={(ref) => this.in_out_cfg = {dskey:'destlist',field_text:'dest_text',field_id:'dest_id'} } 
         
         onPress={this.onPopPressed}

         underlayStyle={{style:'white'}}>
         <View  style={{ backgroundColor:"#F5F5F5",paddingTop:15,  borderColor: 'black', borderBottomWidth:1,height:40,marginLeft:20, width:225  }} >
          <Text  style={{fontSize:16}}>{AnnounceStore.dest_text}</Text>
         </View>
       </TouchableWithoutFeedback>
      </View>


      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >货品名称</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

 
      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >单价(吨公里)</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >发车时间</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>
      
       <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >联系电话</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
       </View>
      
       <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >需要车型</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
       </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >需要车辆数</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>

       </View>


        <View style={styles.button}>
          <Button onPress={this._onPressSave} title="        保存       " />
        </View>
    </ScrollView>
    );

  }
}

 
 export default   Announce


 const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: "row",
    height:45,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    
  },

   FormLabel:{
   fontSize:16,
   color:'#100F0E',
   marginRight:0,
   fontWeight:"normal"
  },

  inputWrap: {
    flex: 1,
    marginTop: 4,

  },

  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
 
   fullWidthButton: {
    backgroundColor: 'red',
    color:"red",
    height:40,
    width:230,
    borderWidth: 1,
    marginLeft:20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red'
  },

 
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
  },  
  inputcvv: {
    fontSize: 16,
    color: "#100F0E"

  }
});