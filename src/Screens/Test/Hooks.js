import React from 'react';
import { useState } from "react";

import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function Hooks() {

    const [name, setName] = useState("Ihechikara");

    const changeName = () => {
      setName("Chikara");
    };

  return (
    <View style={styles.container}>
    <Text>My name is {name}</Text>
      <Pressable onPress={() => changeName()} >
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
