import React, {Component} from 'react';
import {View,Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

// import { useNavigation } from '@react-navigation/native'

import { useForm } from 'react-hook-form';

import { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';



import { userLogin } from '../../redux/actions/auth';

import TextInputWithLabel from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import CustomInput from '../../components/CustomInput';

// const Login = ({ navigation }) => {
const Login = ({ navigation }) => {
// const Login = () => {
    // const navigation = useNavigation();
    const dispatch = useDispatch();
    const [state, setState] = useState({
         isLoading:false,
         email:'',
         password:'',
        isSecure:true, 
    })
    const {isLoading, email, password, isSecure} = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const { control, handleSubmit, formState:{errors} } = useForm();

    const stateData = useSelector((state) => state.user.usr );
    // console.log("First",stateData)

    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const updateState =(data) => {
    //     ({ ...state, ...data })
    // }

    //console.log({isLoading});
    const onLogin = (data) => {
        // alert(data.password);
        // if(email == '' || password == ''){
        //     alert("Please fill your email and password")
        //     return
        // }
        // console.log(data);
        const newData = {
            email: data.email,
            pass: data.password
        }

        dispatch(userLogin(newData));
    }

    return(
        <View style={styles.container}>
                <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    // imgSource={ICONS.email}
                    secureTextEntry={false}
                    rules={{
                        required: 'Email is required',
                        // pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
                    }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Password"
                    // imgSource={ICONS.eye}
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long',
                        },
                    }}
                />
                <View style={ {marginTop: 100 }}>
                    <TouchableOpacity 
                        onPress={handleSubmit(onLogin)}
                        // onPress={handleSubmit((data) => onLogin(data))}
                    >
                        <Text>{stateData.email}
                            Sign In
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                        //onPress={() => navigation.navigate("Profile")}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Text style={{textAlign:'center'}}>{stateData.email}
                            Profile
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
        // alignItems:'center',
        // justifyContent:'center',
    }
})

export default Login;