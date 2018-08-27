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
import {observable, autorun,computed} from 'mobx';
import { observer } from 'mobx-react';
import DatePicker from 'react-native-datepicker'
import {Label} from 'teaset';
import {Input} from 'teaset';


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
       this.setState({key:value})
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
   
     return (
      <ScrollView style={styles.container}>

      <View style={styles.row}>
        <Label style={styles.label}  text='运输计划号' />
        <Input style={styles.input}  size='lg' onChangeText={ (text)=> this.onSingleItem(text,'orderno')} />
      </View>

     
      <View style={styles.row}>
        <Label style={styles.label}  text='发货地点' />
        <Input style={styles.input}  size='lg' onChangeText={ (text)=> this.onSingleItem(text,'src_text')} />
      </View>

       <View style={styles.row}>
       <Label style={styles.label} text='收货地点' />
        <TouchableWithoutFeedback 
         onPress={() => this.onPopPressed({dskey:'destlist',dbfield:'locname',field_text:'dest_text',field_id:'descloc'})}
        >
         <View  style={styles.popSelector }>
          <Text  style={styles.input} >{AnnounceStore.announceDS.dest_text}</Text>
         </View>
       </TouchableWithoutFeedback>
      </View>


       <View style={styles.row}>
         <Label style={styles.label} text='货品名称    ' />

       <TouchableWithoutFeedback 
         onPress={() => this.onPopPressed({dskey:'goodslist',dbfield:'goodsname',field_text:'goods_text',field_id:'goods_id'})}
         underlayStyle={{style:'white'}}>
         <View  style={styles.popSelector }>
          <Text  style={styles.input} >{AnnounceStore.announceDS.goods_text}</Text>
         </View>
       </TouchableWithoutFeedback>
      </View> 
 
      <View style={styles.row}>
         <Label style={styles.label}  text='单价(吨公里)' />
         <Input style={styles.input}  size='lg' onChangeText={ (text)=> this.onSingleItem(text,'price')} />
      </View>

      <View style={styles.row}>
        <Label style={styles.label} text='发车时间    ' />
         <DatePicker  style={{width:280}}
         
        date={AnnounceStore.announceDS.cttime}
        mode="date"
        placeholder="选择发车时间"
        format="YYYY-MM-DD"
        minDate="2017-012-01"
        maxDate="2030-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={
          {
          dateIcon: {
            position: 'absolute',
            width: 0,
            height:40,
            left: 0,
            top: 4,
            marginLeft: 0
          },

          dateInput: {
            height:40,
            marginLeft: 0,
          }
         }}
        onDateChange={(date) => { this.onSingleItem(date,'cttime')  }}
      />
            
            
     
      </View>
      
       <View style={styles.row}>

        <Label style={styles.label} text='联系电话' />
        <Input style={styles.input}  size='lg' onChangeText={ (text)=> this.onSingleItem(text,'contact_mobile')} />
       </View>
      
       <View style={styles.row}>
        <Label style={styles.label}  text='需要车型' />
        <Input style={styles.input}  size='lg' onChangeText={ (text)=> this.onSingleItem(text,'cartype_text')} />
       </View>

      <View style={styles.row}>
        <Label style={styles.label} text='需要车辆数' />
        <Input style={styles.input} size='lg' onChangeText={ (text)=> this.onSingleItem(text,'cars_need')} />
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

 
  container: {
    display:'flex',
    paddingTop: 10,
    backgroundColor: 'white',
  },


  row: {
    display:'flex',
    flexDirection: "row",
    height:45,
    marginLeft:15,
    marginRight:15,
    justifyContent:'space-between',
  },

  label:{
    flex:1,
    height:45,
    width:320,
    backgroundColor: '#C127E4',
    color: '#8a6d3b', 
    fontSize:16,
  },
  

  input: {
    flex:2,
    height:45,
    width:120,
    backgroundColor: 'red',
    'flexBasis':'auto',
    fontSize:16,
  },
 

 popSelector:
  { 
    borderColor: 'red', 
    borderWidth: 4,
    paddingTop:15,
    paddingLeft:15,
    
    height:45,
    borderRadius:6,
    marginLeft:20, 
    width:280, 
  },
  

  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop:10
  },
 

});
