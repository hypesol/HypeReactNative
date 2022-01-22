import React from 'react';
import {View, Text, Button, SafeAreaView, TouchableOpacity,Alert, Pressable} from 'react-native';

const Buttons = ({ navigation }) => {
    const goToProfile = () => {
        navigation.navigate("Profile", {title:"Subs me"});
    }
      
  return (
      <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItem:'center' }}>
        <View>
            <Text style={{fontSize: 42}}>This is Home Screen </Text>
            <Text style={{fontSize: 22, marginBottom:20}}>This is Line 1 Home Screen </Text>
            <Pressable onPress={() => Alert.alert('Simple Button pressed')}>
            <Text>I'm pressable!</Text>
            </Pressable>
            <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} style={{marginBottom: 20}}>
                <Text>Alert Touch</Text>
            </TouchableOpacity>
            <Button onPress={goToProfile} title="Go to Profile" style={{ marginTop:20, marginBottom:20 }} />
            <Button onPress={() => navigation.navigate('Profile') } title="Go to Profile2" />
        </View>
        </SafeAreaView>
    )
}

export default Buttons;
