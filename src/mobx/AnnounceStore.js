import { observable,autorun, action } from "mobx";


class AnnounceStore {

constructor(){
    // this.runflag="runned"
}
//   planno:'',
//   // 发货地点
//   src_id:'',
//   src_text:'',
//   // 收货地点
//   dest_id:'',
//   dest_text:'',
// // 货品名称
//   goods_id:'',
//   goods_text:'',
// //单价
//   price:'',
// //发车时间
//   delver_datetime=null;
// //联系电话
//   contact_mobile:'',
// //需要车型
//   cartype_id:'',
//   cartype_text:'',
// //需要车辆数
//   carnum_need=0

  @observable announceDS ={
      planno:'',
      src_id:'',
      src_text:'',
      dest_id:'',
      dest_text:'',
      goods_id:'',
      goods_text:'',
      price:'',
      delver_datetime:null,
      contact_mobile:'',
      cartype_id:'',
      cartype_text:'',
      carnum_need:0
  }

  
 
  
    
  @action get22(item) {
    return  this.announceDS[item]
  }


  @action setkv(key, value) {
              this.announceDS[key] = value;
             
  }


}


const ds = new AnnounceStore()
export default ds