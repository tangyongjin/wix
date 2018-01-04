import { observable,autorun, action } from "mobx";


class sysstroe {

  @observable Configs ={}
  @action addItem(item, value) {
     this.Configs[item]=value
  }

 
  @observable  access_token=''
  @action setToken(token) {
     this.access_token = token
  }


  @action setItem(item, value) {
     this.Configs[item]=value
  }
}


const ds = new sysstroe()
export default ds
