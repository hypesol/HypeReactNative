import React, {Component} from 'react';
import {View, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { useState } from 'react';


const Login = ({navigation}) => {

    const [state, setState] = useState({
         isLoading:false,
         email:'',
         password:'',
        isSecure:true, 
    })
    const {isLoading, email, password, isSecure} = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    // const updateState =(data) => {
    //     ({ ...state, ...data })
    // }

    //console.log({isLoading});
    const onLogin = () => {
        if(email == '' || password == ''){
            alert("Please fill your email and password")
            return
        }
        navigation.navigate("Signup")
    }

    return(
        <View style={styles.container}>
                <TextInputWithLabel 
                placeHolder="Enter email address" 
                label="Email" 
                onChangeText={(email) => updateState({ email })}
                />
                <TextInputWithLabel 
                placeHolder="Enter password" 
                label="Password" 
                secureTextEntry={isSecure } 
                onChangeText={(password) => updateState({ password })}
                />
                <ButtonWithLoader text="Login Button" onPress={onLogin} />
        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center',
    }
})

export default Login;