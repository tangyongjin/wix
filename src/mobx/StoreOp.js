

export function StoreInit(res) {

  console.log('StoreInit')
  ConfigStore.addItem('destlist',res.destlist)      
  ConfigStore.addItem('goodslist',res.goodslist)      
}

 

async function fetchData(callurl){
   const response= await  fetch(callurl)
   const json=await  response.json()
   StoreInit(json)
}

export function StoreRefresh(url,key) {

  let callurl =url+'transorder/refresh_token?access_token='+key
  console.log(callurl)
  fetchData(callurl).done()

}
