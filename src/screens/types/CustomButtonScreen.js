import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Camera from 'react-native-camera';


let navigator;
const CustomButton = ({text}) =>
  <TouchableOpacity
    style={[styles.buttonContainer]}
    onPress={() => navigator.pop()}
  >
    <View style={styles.button}>
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  </TouchableOpacity>;
Navigation.registerComponent('CustomButton', () => CustomButton);

export default class CustomButtonScreen extends React.Component {

   constructor(props) {
        super(props);
        
        this.state = {
            moveAnim: new Animated.Value(0),
            Sound:require('react-native-sound'),
            transorder_url:''
        };
        
        console.log(this.state)

        console.log(this.props)

        this.title = '扫描二维码';
  }


  static navigatorButtons = {
    rightButtons: [
      {
        id: 'custom-button',
        component: 'CustomButton',
        passProps: {
          text: 'Hi!'
        }
      }
    ]
  };

  componentWillMount() {
    navigator = this.props.navigator;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Custom right  Button??</Text>
      </View>
    );
  }

  componentWillUnmount() {
    navigator = null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'tomato',
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
