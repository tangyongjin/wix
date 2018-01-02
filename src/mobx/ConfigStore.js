import { observable,autorun, action } from "mobx";


class sysstroe {

  @observable Configs ={}
  @action addItem(item, value) {
     this.Configs[item]=value
  }

   @observable foo: string;

    setFoo() {
        this.foo = 'test';
    }

   setFoo2(v) {
        this.foo = v;
    }


  @action setItem(item, value) {
     this.Configs[item]=value
  }
}


const ds = new sysstroe()
export default ds