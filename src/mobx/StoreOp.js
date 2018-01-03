
export function StoreInit(res) {

  console.log('StoreInit')
  ConfigStore.addItem('destlist',res.destlist)      
  ConfigStore.addItem('goodslist',res.goodslist)      
  

}

export function StoreRefresh(key) {
  console.log('StoreRefresh')

}
