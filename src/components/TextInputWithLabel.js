import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const TextInputWithLabel = ({label, value, placeHolder, inputStyle, textStyle, isSecure, onChangeText, ...props}) => {
    return(
        <View>
             <Text>{label}</Text>
            <TextInput 
            value={value}
            placeholder={placeHolder}
            onChangeText={onChangeText}
            style={styles.inputStyle}
            placeholderTextColor="gray"
            {...props}
            />
        </View>
    )   
}

const styles = StyleSheet.create({
    inputStyle:{
        height:48,
        borderWidth:1,
        borderColor:'gray',
        width:'100%'
    }
})

export default TextInputWithLabel;


// const TextInputWithLabel = (
//     label, value, placeHolder, inputStyle, textStyle, isSecure, onChangeText, props
// ) => {
//     return(
//         <View style={styles.container}>
//             <TextInput 
//             value={value}
//             placeHolder={placeHolder}
//             onChangeText={onChangeText}
//             style={styles.inputStyle}
//             {...props}
//             />
//         </View>
//     )   
// }
