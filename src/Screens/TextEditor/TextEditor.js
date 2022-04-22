import React, {Component, useState} from 'react';
import {
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  TextInput,
  SafeAreaView
} from 'react-native';
import Gestures from 'react-native-easy-gestures';




const TextEditor = () => {

    const [addText, setAddText] = useState();


  const setTopCategories = (data) => {
    //console.log(item.split('>') ,item.split('>').length, item.split('>')[item.split('>').length-1])}
    let splitData = data.split('>')[data.split('>').length - 1].trim();
    const dataArray = getCategories;
      var index = dataArray.indexOf(splitData);
      console.log("indexindex",index)
      if (index > -1) {
        console.log("Already Addwed")
      }else{
        console.log("New Value")
        setGetCategories(prv => prv.concat(splitData));
      }
  };
  
  const removeCategories = async (index) => {
    let removeCategs = getCategories;
    var catArray = [];
    for (var i=0; i<getCategories.length;i++){
        var data = getCategories[i];
         if (index != data){        
             catArray.push(data)
        }
    }
    setGetCategories(catArray);
    // await removeCategs = removeCategs.splice(index, 1);
    //    setGetCategories(removeCategs);
  };


  return (
    <SafeAreaView style={{flex: 1,paddingTop:30}}>
        <TouchableOpacity>
            <Text style={{fontSize:32}}>Add Text</Text>
          
        </TouchableOpacity>
         <Gestures
          onEnd={(event, styles) => {
            console.log(styles);
          }}>
      <Text style={{fontSize:22,marginTop:0}}>Hello</Text>
      <TextInput
            style={{fontSize:24, color:'red'}}
      editable
      placeholder='Enter Value'
      multiline

    />
      </Gestures>

      <Gestures>
          <Image
            style={styles.logo}
            source={require('../../assets/splash.png')}
          />
        </Gestures>
    </SafeAreaView>
  );
};

export default TextEditor;


const styles = StyleSheet.create({
  holder: {
    width: 18,
    height: 18,
    backgroundColor: '#fff',
    borderRadius: 9,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Top: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  ico: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  center: {
    width: '100%',
    height: '100%',
  },
});
