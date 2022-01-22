import React from 'react';
import {View, Text, Button, Pressable} from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>This is Home screen</Text>
        <Button title="Click me again" onPress={() => alert("Hello")} />
        <Pressable onPress={() => Alert.alert('Simple Button pressed')}>
            <Text>I'm pressable!</Text>
            </Pressable>
      </View>
    );
  }
}

export default Home;