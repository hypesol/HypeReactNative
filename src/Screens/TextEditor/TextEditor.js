import React, {Component, useState, useEffect, useRef} from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  Modal,
} from 'react-native';
import Gestures from 'react-native-easy-gestures';
import {useIsFocused} from '@react-navigation/native';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import Slider from '@react-native-community/slider';
import {stickersData} from '../../consts/stickers'
// const { stickersData } = require("../../assets/data");


let input = 0;

const TextEditor = () => {
  console.log("STR",stickersData[0].id);
  const [addedText, setAddedText] = useState([]);
  const isFocused = useIsFocused();
  const viewShotRef = useRef();
  const setTopCategories = data => {
    //console.log(item.split('>') ,item.split('>').length, item.split('>')[item.split('>').length-1])}
    let splitData = data.split('>')[data.split('>').length - 1].trim();
    const dataArray = getCategories;
    var index = dataArray.indexOf(splitData);
    console.log('indexindex', index);
    if (index > -1) {
      console.log('Already Addwed');
    } else {
      console.log('New Value');
      setGetCategories(prv => prv.concat(splitData));
    }
  };

  const removeCategories = async index => {
    let removeCategs = getCategories;
    var catArray = [];
    for (var i = 0; i < getCategories.length; i++) {
      var data = getCategories[i];
      if (index != data) {
        catArray.push(data);
      }
    }
    setGetCategories(catArray);
    // await removeCategs = removeCategs.splice(index, 1);
    //    setGetCategories(removeCategs);
  };

  const addNewTextFunction = () => {
    input = input + 1;
    // setAddedText(prv => prv.concat(`Text${input}`));
    setAddedText(prv => prv.concat(addNewTextString));
    console.log('Added', addedText, input);
    setModalVisible(!modalVisible);
  };

  let textArray = [];

  const deleteText = async ele => {
    let newTextArray = addedText;
    let content = ele;

    for (var i = 0; i < addedText.length; i++) {
      var data = addedText[i];
      console.log('VAL', content);
      if (content != data) {
        textArray.push(data);
      }
    }
    setAddedText(textArray);

    //  if (index > -1) {
    //   newTextArray.splice(index, 1);
    //   setAddedText(newTextArray);
    // }
  };
  const saveViewShot = () => {
    viewShotRef.current.capture().then(uri => {
      CameraRoll.saveToCameraRoll(uri)
        .then(alert('Done', 'Photo added to camera roll!'))
        .catch(err => console.log('err:', err));
    });
  };

  const [sizeOfText, setSizeOfText] = useState(32);
  const [textInAction, setTextInAction] = useState(0);
  const [arrayTextData, setArrayTextData] = useState([]);
  const [textID, setTextID] = useState(0);
  const [lorem, setLorem] = useState('sample text');
  const FONTDEF = 'Montserrat-Medium';
  const [newFontSize, setNewFontSize] = useState(32);
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [addNewTextString, setAddNewTextString] = React.useState();

  const fontSizing = sizeValue => {
    //fontsave

    const index = textInAction;
    setNewFontSize(sizeValue);
    const markers = [...addedText];
    console.log("Markers", markers)
    // markers[index].defFontSize = sizeValue;
    // markers[index].defLineHeight = sizeValue;
    // setArrayTextData({
    //    arrayTextData: markers,
    //     lineHegOfText:sizeValue/2
    //   });
    console.log('arrayTextData', arrayTextData);
  };
  useEffect(() => {
    if (isFocused) {
      let DEFS = {
        defTextID: textID,
        defTextValue: lorem,
        defFontFamily: FONTDEF,
        defAlign: 'center',
        defLetterSpacing: 0,
        defColor: '#000000',
        defLineHeight: sizeOfText,
        defFontSize: 15,
      };

      setArrayTextData(...addedText, DEFS);
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 30}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          // onPress={addNewText}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={{fontSize: 32}}>Add Text</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={saveViewShot}>
          <Text style={{fontSize: 32}}>Save</Text>
        </TouchableOpacity>
      </View>
      {
        // console.log(Stickers)
        // Stickers.map(item => console.log(item))
      }
      {/* <FlatList
        data={Stickers}
        // renderItem={item => console.log(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList> */}
      <Slider
        value={sizeOfText}
        onValueChange={sizeOfText => {
          fontSizing(sizeOfText);
        }}
        style={styles.slide}
        minimumValue={12}
        maximumValue={40}
        minimumTrackTintColor={'black'}
        maximumTrackTintColor={'white'}
        thumbTintColor={'black'}
      />

      <ViewShot
        ref={viewShotRef}
        options={{format: 'png', quality: 1.0}}
        style={{
          width: 400,
          height: 700,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}>
        {addedText &&
          addedText.map((data, index) => (
            <Gestures
              style={{position: 'absolute', left: xPos, top: yPos}}
              onEnd={(event, styles) => {
                console.log(styles);
                setxPos(styles.left);
                setyPos(styles.top);
                console.log("LastX",xPos)
              }}>
              {/* <TouchableOpacity
          key={index+1}
            onPress={() =>
              Alert.alert(
                'Delete this text?',
                'Do you want to delete this item?',
                [
                  {text: 'OK', onPress: () => deleteText(index)},
                  {text: 'Cancel'},
                ],
                {cancelable: false},
              )
            }> */}
              <TouchableOpacity onPress={() => deleteText(data)}>
                <Text style={{fontSize: newFontSize, marginTop: 0}}>
                  {data}
                </Text>
              </TouchableOpacity>
            </Gestures>
          ))}
        <Gestures>
          <Image
            style={styles.logo}
            source={require('../../assets/splash.png')}
          />
        </Gestures>
      </ViewShot>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TextInput
              style={{fontSize: newFontSize, color: 'red'}}
              editable
              placeholder="Enter Value"
              multiline
              onChangeText={text => setAddNewTextString(text)}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
              onPress={() => addNewTextFunction()}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
