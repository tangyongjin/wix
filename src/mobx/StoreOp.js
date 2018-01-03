
export function StoreInit(res) {

  console.log('StoreInit')
  ConfigStore.addItem('destlist',res.destlist)              
 
   

}

export function StoreRefresh(key) {
  console.log('StoreRefresh')

}
