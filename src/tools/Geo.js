import BackgroundTimer from 'react-native-background-timer'; 


export const reportGPS=()=>{

  Geolocation.getCurrentPosition(
        location => {
              var result = "速度：" + location.coords.speed +
                          "\n经度：" + location.coords.longitude +
                          "\n纬度：" + location.coords.latitude +
                          "\n准确度：" + location.coords.accuracy +
                          "\n行进方向：" + location.coords.heading +
                          "\n海拔：" + location.coords.altitude +
                          "\n海拔准确度：" + location.coords.altitudeAccuracy +
                          "\n时间戳：" + location.timestamp;
              
              let gps={coords:location.coords,timestamp:location.timestamp}
              console.log('gps',gps)
              fetch(API_ROOT+'transorder/receviegps', {  
                method: 'POST',
                body: JSON.stringify({
                  gps
                })
              })
          },
          error => {
            alert("获取位置失败："+ error)
          }
      );
     
}

 export const StartGPS=()=>{

   const intervalId = BackgroundTimer.setInterval(() => {
      console.log( new Date() );
      reportGPS();
      }, 300000);  //30000秒上报GPS
}


 


