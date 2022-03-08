import React, {Component} from 'react';
import {View,Text, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';

// import { useNavigation } from '@react-navigation/native'

import { useForm } from 'react-hook-form';

import { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';



import { userLogin } from '../../redux/actions/auth';

import TextInputWithLabel from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import CustomInput from '../../components/CustomInput';

import SelectDropdown from 'react-native-select-dropdown'
import {Controller} from 'react-hook-form';


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

    const stateData = useSelector((state) => state.authReducer.usr );

    const [sdropdown, setsDropdown] = useState(null);
    // console.log("First",stateData)

    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    
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
        // console.log("MAIN:-  "+data.email);
        const newData = {
            email: data.email,
            password: data.password
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

<Text style={{color:'red', fontWeight:'bold'}}>sss { stateData }</Text>

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



{/* <Controller
        control={control}
        rules={{
         maxLength: 100,
         required: 'Field is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <SelectDropdown
                data={countries}
                defaultValue={value}
                onChange={onChange}
                onBlur={onBlur}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    value => selectedItem
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
        )}
        name="lastName"
      /> */}



{/* <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setsDropdown(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            /> */}
                <View style={ {marginTop: 10 }}>
                    <TouchableOpacity 
                        // onPress={handleSubmit(onLogin)}
                        // onPress={onL
                        
                        onPress={handleSubmit((data) => onLogin(data))}
                        // onPress={ sdropdown === null ? null : handleSubmit((data) => onLogin(data))}
                        
                    >
                        <Text>
                            {/* {stateData.email} */}
                            Sign In
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                        //onPress={() => navigation.navigate("Profile")}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Text style={{textAlign:'center'}}>
                            {/* {stateData.email} */}
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