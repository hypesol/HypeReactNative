import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonWithLoader = ({text, onPress}) => {
    return(
        <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>

        // <TouchableOpacity style={styles.btnStyle}>
        //     <Text style={styles.textStyle}>{text}</Text>
        // </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle:{
        height:48,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:16,
        fontWeight:'bold',
        color: 'white'
    }
})

export default ButtonWithLoader;