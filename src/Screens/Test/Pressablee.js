import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function Pressablee() {
  const logPress = (pressType) => {
    console.log(pressType);
  };

  return (
    <View style={styles.container}>
      <Pressable 
        onPress={() => logPress("onPress")} 
        onPressIn={() => logPress("onPressIn")} 
        onPressOut={() => logPress("onPressOut")} 
        onLongPress={() => logPress("onLongPress")}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
          }
        ]}>
        <Text>Press Me!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
