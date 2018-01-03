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
  Alert,
  Platform
} from 'react-native';

import {Navigation} from 'react-native-navigation';
 
import {Icon,  FormLabel,FormInput } from 'react-native-elements';
  
import {observable, autorun,computed} from 'mobx';
 
import { observer } from 'mobx-react';
import DatePicker from 'react-native-datepicker'
 
 

@observer

class Announce extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            passedData:null
        };
         this.onPopPressed = this.onPopPressed.bind(this)
         this.onSingleItem = this.onSingleItem.bind(this)
  }


  componentWillMount() {
    navigator = this.props.navigator;
  }

 onSingleItem (value,key) {
       console.log(value,key)
       AnnounceStore.setkv( key,value)
  }

  onPopPressed (cfg) {
       this.props.navigator.push({
          screen: 'DataBridge',
          title: '选择收货地点',
          passProps:cfg
       });
  }


 

async saveAnnounce(){
 try {
      let response = await fetch(API_ROOT+ 'transorder/saveAnnounce', {
                              method: 'POST',
                              body: JSON.stringify(AnnounceStore)
                            });
      
      if (response.status == 200 ) {
          let res = await response.json();
          let retcode=res.code;
          Alert.alert(res.msg)
      } else {
          let error = response.status;
          throw error;
      }
    } catch(error) {
    }
}
  

 _onPressSave = () => {
  Alert.alert(
  '确认',
  '发布信息?',
  [
    
    {text: '取消' , style: 'cancel'},
    {text: '确定', onPress:this.saveAnnounce  },
  ],
  { cancelable: true}
 )
}

 
 render() {
   
    const {showAlert} = this.state;
    return (

      <ScrollView style={styles.container}>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >运输计划号</FormLabel>

        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   
         onChangeText={ (text)=> this.onSingleItem(text,'planno') } />
        </View>
      </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >发货地点</FormLabel>

        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   
         onChangeText={ (text)=> this.onSingleItem(text,'src_text')} />
        </View>
      </View>

      
   

       <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >收货地点</FormLabel>
       <TouchableWithoutFeedback style={styles.fullWidthButton} 
         onPress={() => this.onPopPressed({dskey:'destlist',dbfield:'destname',field_text:'dest_text',field_id:'dest_id'})}

         underlayStyle={{style:'white'}}>
         <View  style={{ backgroundColor:"#F5F5F5",paddingTop:15,  borderColor: 'black', borderBottomWidth:1,height:40,marginLeft:20, width:225  }} >
          <Text  style={{fontSize:16}}>{AnnounceStore.announceDS.dest_text}</Text>
         </View>

       </TouchableWithoutFeedback>
      </View>


       <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >货品名称</FormLabel>
       <TouchableWithoutFeedback style={styles.fullWidthButton} 
         onPress={() => this.onPopPressed({dskey:'goodslist',dbfield:'goodsname',field_text:'goods_text',field_id:'goods_id'})}
         underlayStyle={{style:'white'}}>
         <View  style={{ backgroundColor:"#F5F5F5",paddingTop:15,  borderColor: 'black', borderBottomWidth:1,height:40,marginLeft:20, width:225  }} >
          <Text  style={{fontSize:16}}>{AnnounceStore.announceDS.goods_text}</Text>
         </View>
       </TouchableWithoutFeedback>
      </View> 
       

 
      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >单价(吨公里)</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   
         onChangeText={ (text)=> this.onSingleItem(text,'price')} />
        </View>
      </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >发车时间</FormLabel>
         <DatePicker
        style={{width: 255}}
        date={AnnounceStore.announceDS.delver_datetime}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2017-012-01"
        maxDate="2030-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            width: 0,
            height:0,
            left: 0,
            top: 4,
            marginLeft: 0
          },

          dateInput: {
            marginLeft: 20
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { this.onSingleItem(date,'delver_datetime')  }}
      />
            
            
     
      </View>
      
       <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >联系电话</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   
         onChangeText={ (text)=> this.onSingleItem(text,'contact_mobile')} />
        </View>
       </View>
      
       <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >需要车型</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   
         onChangeText={ (text)=> this.onSingleItem(text,'cartype_text')} />
        </View>
       </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >需要车辆数</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   
         onChangeText={ (text)=> this.onSingleItem(text,'carnum_need')} />
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
    marginTop:0,
    
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