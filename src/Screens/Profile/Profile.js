import React, { useState, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  StyleSheet,
  ActivityIndicator,
  TextInput,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
  Animated,
  Dimensions,
  Switch,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../utils/GetResponsiveHeight';

// import CustomInput from '../../../components/CustomInput/CustomInput';
// import CustomButton from '../../../components/CustomButton/CustomButton';
// import ICONS from '../../../consts/icons';
// import { FONTS, BUTTONS } from '../../../consts';
// import AppState from '../../../models/reducers';
// import { logOutRequest } from "../../../store/actions/userActions";
// import { LogOutRequestEnum } from "../../../models/actions/user";
// import styles from './styles';

  
const ProfileView = (props) => {
  const appState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("appState New", appState)

  const logoutUser = () => {
    dispatch(logOutRequest(LogOutRequestEnum.tokenExpire));
  }
  return (

    <View
      style={{
        backgroundColor: '#FEFEFE',
        height: '100%',
        flexDirection: 'column',
      }}>
      
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          <Text style={{color:'#000'}}>
            {appState.usr}
          </Text>
          <TouchableOpacity
                  // style={[BUTTONS.btn, BUTTONS.btnFill]}
                  
                  onPress={() => {
                    logoutUser();
                  }}
                >
                    <Text
                      // style={BUTTONS.textBtn}
                      >
                      Logout
                    </Text>
                </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
};
export default ProfileView;