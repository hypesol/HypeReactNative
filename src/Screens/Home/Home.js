import React from 'react';
import {View, Text, Button, SafeAreaView, TouchableOpacity,Alert, Pressable} from 'react-native';

const Home = ({ navigation }) => {
    const goToProfile = () => {
        navigation.navigate("Profile", {title:"Subs me"});
    }
      
  return (
      <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItem:'center' }}>
        <View>
            
        </View>
        </SafeAreaView>
    )
}

export default Home;
