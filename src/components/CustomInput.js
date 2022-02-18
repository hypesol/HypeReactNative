import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import {useState} from 'react';


const CustomInput = ({
  name,
  control,
  placeholder,
  imgSource,
  rules = {},
  secureTextEntry,
}) => {
  const [hidePass, setHidePass] = useState(true);
  const [secureText, setSecureText] = useState(secureTextEntry);
  
  const updateEye = () => {
    setHidePass(!hidePass);
    setSecureText(!hidePass);
  }
  
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View style={styles.label}>
            <Text>{placeholder}</Text>
          </View>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
              <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize='none'
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              // placeholder={placeholder}
              style={styles.input}
              // secureTextEntry={hidePass ? true : false}
              secureTextEntry={secureText}
            />
            {/* {secureTextEntry ? (
              <TouchableOpacity onPress={() => updateEye()} >
                <Image source={hidePass? ICONS.eye : ICONS.password_eye} style={styles.inputIcon} />
              </TouchableOpacity>
              ) : */}
              <Image source={imgSource} style={styles.inputIcon} />
            {/* } */}
            </View>
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F4',
    width: '100%',
    flexDirection:'row',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom:8,
    flex:1

  },
  inputContainer: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: { color:'#000'},
  input: { height:40, width: '94%'  },
  inputIcon:{ width:20, resizeMode:'contain' }
});

export default CustomInput;