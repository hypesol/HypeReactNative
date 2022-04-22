import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Gestures from 'react-native-easy-gestures';

export default class Example3 extends Component {
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Local files and assets can be imported by dragging and dropping them
          into the editor
        </Text>
        <Gestures>
          <Image
            style={styles.logo}
            source={require('../../assets/splash.png')}
          />
        </Gestures>

        <Gestures
          rotatable={false}
          scalable={false}
          onChange={(event, styles) => {
            console.log(styles);
          }}>
          <Image
            style={styles.logo}
            source={require('../../assets/splash.png')}
          />
        </Gestures>

        <Gestures
          draggable={{
            y: false,
          }}
          scalable={{
            min: 0.1,
            max: 7,
          }}
          rotatable={false}
          onEnd={(event, styles) => {
            console.log(styles);
          }}>
          <Image
            style={styles.logo}
            source={require('../../assets/splash.png')}
          />
        </Gestures>


        <Gestures
  rotate={`${180}deg`}
  scale={1}
>
<Image
            style={styles.logo}
            source={require('../../assets/splash.png')}
          />
</Gestures>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: '#056ecf',
    height: 128,
    width: 128,
  },
});
