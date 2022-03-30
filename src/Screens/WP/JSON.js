import React, { useEffect, useState } from 'react';
import Config from 'react-native-config';
import { useIsFocused } from '@react-navigation/native';

import {View, Text, Button, SafeAreaView, TouchableOpacity,Alert, Pressable} from 'react-native';

const JSON = () => {
    const isFocused = useIsFocused();

    //https://ejazahmad.com/jsonurdunovel/books.php
     const fetchApiData = async route => {
        try {
        //   const response = await fetch(Config.API_URL + route);
          const response = await fetch('https://ejazahmad.com/jsonurdunovel/books.php');
          const json = await response.json();
          console.log(json);
          return json;
        } catch (error) {
          console.error(error);
          return null;
        }
      };

      useEffect(() => {
        fetchApiData();
      }, [isFocused]);
  return (
      <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItem:'center' }}>
        <View>
           
                <Text>Alert Touch</Text>
           
        </View>
        </SafeAreaView>
    )
}

export default JSON;
