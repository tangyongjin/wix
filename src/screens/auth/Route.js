import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';


const tabs_before_login = {
 
  screen: 'Login',
  title: 'Login',
  navigatorStyle: {},
  navigatorButtons: {},
 };



const tabs_after_login = [{
  label: 'Navigation',
  screen: 'example.Types',
  icon: require('../../../img/list.png'),
  title: 'Navigation Types',
}, {
  label: '运单',
  screen: 'eureka.Transorders.Announce',
  icon: require('../../../img/swap.png'),
  title: '发布运单',
}];


 
  tabs_after_login.push(
  {
    label: '我的',
    screen: 'Profile',
    icon: require('../../../img/transform.png'),
    title: 'Profile',
  }
,
{
    label: '扫码',
    screen: 'eureka.Transorders.Orderscan',
    icon: require('../../../img/transform.png'),
    title: '订单扫码',
  },
  {
  label: 'Login',
  screen: 'Login',
  icon: require('../../../img/swap.png'),
  title: 'Login',
  }
  );
 


export const  before_login=()=>{

      Navigation.startSingleScreenApp({
                      screen:tabs_before_login,
                      animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
                      tabsStyle: {
                        tabBarBackgroundColor: '#003a66',
                        tabBarButtonColor: '#ffffff',
                        tabBarSelectedButtonColor: '#ff505c',
                        tabFontFamily: 'BioRhyme-Bold',
                      },
                      appStyle: {
                        tabBarBackgroundColor: '#003a66',
                        navBarButtonColor: '#ffffff',
                        tabBarButtonColor: '#ffffff',
                        navBarTextColor: '#ffffff',
                        tabBarSelectedButtonColor: '#ff505c',
                        navigationBarColor: '#003a66',
                        navBarBackgroundColor: '#003a66',
                        statusBarColor: '#002b4c',
                        tabFontFamily: 'BioRhyme-Bold',
                        forceTitlesDisplay: true
                      }
                    });
}
 
export const  after_login=()=>{

   Navigation.startTabBasedApp({
                        tabs:tabs_after_login,
                        animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
                        tabsStyle: {
                          tabBarBackgroundColor: '#003a66',
                          tabBarButtonColor: '#ffffff',
                          tabBarSelectedButtonColor: '#ff505c',
                          tabFontFamily: 'BioRhyme-Bold',
                        },
                        appStyle: {
                          tabBarBackgroundColor: '#003a66',
                          navBarButtonColor: '#ffffff',
                          tabBarButtonColor: '#ffffff',
                          navBarTextColor: '#ffffff',
                          tabBarSelectedButtonColor: '#ff505c',
                          navigationBarColor: '#003a66',
                          navBarBackgroundColor: '#003a66',
                          statusBarColor: '#002b4c',
                          tabFontFamily: 'BioRhyme-Bold',
                          forceTitlesDisplay: true
                        },
                        drawer: {
                          left: {
                            screen: 'example.Types.Drawer'
                          }
                        }
                      });

}



 