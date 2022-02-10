import React from 'react';
import { useState } from "react";

import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function Hooks() {

    const [name, setName] = useState("Ihechikara");
    const [count, setCount] = useState(0);

    const changeName = () => {
      setName("Chikara");
    };

  return (
    <View style={styles.container}>
    <Text>My name is {name}</Text>
      <Pressable onPress={() => changeName()} >
        <Text>Press Me!</Text>
      </Pressable>
        
        <Text>{count}</Text>
      <Pressable onPress={() => setCount(count+1)} >
        <Text>Counter</Text>
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
