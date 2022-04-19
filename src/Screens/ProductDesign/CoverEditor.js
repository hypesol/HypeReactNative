import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  CameraRoll,
} from 'react-native';

import {Icon, Tooltip} from 'react-native-elements';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import * as ImagePicker from 'react-native-image-picker';
import Gestures from 'react-native-easy-gestures';
import Mask from 'react-native-mask';
import ViewShot from 'react-native-view-shot';
import {media} from '../../consts/media';

import {IMAGES} from '../FoodApp/consts/images';
import avatar from '../../consts/avatar';
import stickers from '../../consts/stickers';
import addedText from '../../consts/addedText';

// import store from '../store/index';
// import mergeImages from 'merge-image';

const options = {
  title: 'Add Image',
  takePhotButtonTitle: 'Take photo',
  chooseFromLibraryButtonTitle: 'Choose photo from gallary',
  maxWidth: 500,
};

const {width, height} = Dimensions.get('window');

const CoverEditor = props => {
  const viewShotRef = useRef();

  // const navigationOptions = ({navigation}) => {
  //   const { params = {}} = navigation.state;
  //     let title = 'Cover Editor';
  //     let headerStyle = {
  //         backgroundColor: '#0366d6',
  //     };
  //     let headerTintColor = '#fff';
  //     let headerTitleStyle = {
  //         fontWeight: 'bold',
  //     };
  //     let headerRight = (
  //       <TouchableOpacity onPress={()=>{params.onPublish();}} style={{paddingRight: 15}}>
  //         <Icon name="eye" type="font-awesome" color="white" size={24} />
  //       </TouchableOpacity>
  //     );
  //     return {title, headerStyle, headerTintColor, headerTitleStyle, headerRight}
  // }

  tabs = [
    {
      key: 'image',
      icon: 'photo',
      label: 'Add Image',
      type: 'material',
      barColor: '#0366d6',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'text',
      icon: 'title',
      label: 'Add Text',
      type: 'material',
      barColor: '#0366d6',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'sticker',
      icon: 'face',
      label: 'Sticker',
      type: 'material',
      barColor: '#0366d6',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'bgcolor',
      icon: 'color-lens',
      label: 'BG Color',
      type: 'material',
      barColor: '#0366d6',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'bgimage',
      icon: 'image',
      label: 'BG Image',
      type: 'material',
      barColor: '#0366d6',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];
  renderIcon =
    icon =>
    ({isActive}) =>
      <Icon size={20} color="white" name={icon} />;

  renderTab = ({tab, isActive}) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab.icon)}
    />
  );

  const [avatarSource, setAvatarSource] = useState([]);
  const [activeTab, setActiveTab] = useState('image');
  const [bgColor, setBgColor] = useState('white');
  const [addedText, setSddedText] = useState([]);
  const [addedColor, setAddedColor] = useState([]);
  const [addedFont, setAddedFont] = useState([]);
  const [isText, setIsText] = useState(false);
  const [temp_text, setTemp_text] = useState();
  const [temp_sticker, setTemp_sticker] = useState();
  const [stickers, setStickers] = useState([]);
  const [phoneModel, setPhoneModel] = useState();
  const [test_image, setTest_image] = useState();
  const [phone_width, setPhone_width] = useState(0);
  const [phone_height, setPhone_height] = useState(0);

  // this.props.navigation.setParams({onPublish: this._onPublish.bind(this)});

  handleTabPress = newTab => {
    // this.setState({activeTab: newTab.key});
    setActiveTab(newTab.key)
    console.log(newTab.key);
    if (newTab.key == 'image') {
      onSelectAddImage();
    }
    // } else if (newTab.key == 'bgcolor') {
    //   this.props.navigation.navigate('BGColorPicker');
    // } else if (newTab.key == 'sticker') {
    //   this.props.navigation.navigate('SelectSticker');
    // } else if (newTab.key == 'bgimage') {
    //   this.onSelectBGImage();
    // } else if (newTab.key == 'text') {
    //   this.props.navigation.navigate('AddText');
    // }
  };

  //  const saveImagetoServer =( async) => {

  //     fetch(url, {
  //       headers: {
  //           "Access-Key": "mlkjhgfdsazxcvbnmlkjhgffdsaqwrio",
  //           "Authorization": "Bearer M5CxAtOMAJ3hXLLKVzIybTLpcceMvo",
  //           "Content-Type": "application/json"
  //       },
  //       body: data
  //     })
  //     .then(res => res.json())
  //     .then(res=>{console.log(res.message)})
  //   }

  const saveImage = async => {
    // let url = "http://165.22.179.40:81/api/v1/files/";
    // let data = new FormData();
    // this.refs.viewShot.capture().then(uri => {
    //   data.append('image', {
    //     uri,
    //     type: 'image/*',
    //     name: 'cover.jpg'
    //   });
    //   fetch(url, {
    //     headers: {
    //         "Access-Key": "mlkjhgfdsazxcvbnmlkjhgffdsaqwrio",
    //         "Authorization": "Bearer UaPw67LwiREtGekULyu3a1Ihg5NMse",
    //     },
    //     method: 'POST',
    //     body: data
    //   })
    //   .then(res => res.json())
    //   .then(res=>{
    //     console.log("pub res => ", res);
    //     if(res.code == 200) {
    //       alert("Publish success!");
    //     }
    //   })
    // });
  };
  // function _onPublish(){
  //   saveImage();
  // }

 const onSelectAddImage = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setAvatarSource(avatarSource, source)
        // this.setState({
        //   avatarSource: [...this.state.avatarSource, source],
        // });
      }
    });
  }

  // onSelectBGImage = () => {
  //   this.props.navigation.navigate("AddBGImage");
  // }

  // const deleteItem = (ele) => {
  //   let index = ele.index;
  //   if(index > -1){
  //     this.state.avatarSource[index] = '';
  //   }
  //   this.forceUpdate();
  // }

  // const deleteSticker = (ele) => {
  //   let index = ele.index;
  //   if(index > -1){
  //     this.state.stickers[index] = '';
  //   }
  //   this.forceUpdate();
  // }

  // const deleteText = (ele) => {
  //   let index = ele.index;
  //   if(index > -1){
  //     this.state.addedText[index] = '';
  //   }
  //   this.forceUpdate();
  // }

  // const getModel = (async) => {
  //   let phoneModel = this.props.navigation.getParam("phoneModel").file_url;
  //   let url = "http://165.22.179.40:81/media/" + phoneModel;
  //   this.setState({
  //     phoneModel: url
  //   });
  //   Image.getSize(url, (width, height) => {this.setState({phone_width: width, phone_height: height})});
  // }
  // useEffect(() => {
  // componentDidMount = () =>{
  //   this.getModel();
  // }

  // componentWillReceiveProps = () =>{
  //   this.setState({isText: false});
  // }
  // componentDidUpdate = ()=> {
  //   let textKey = this.props.navigation.getParam('addedtext');
  //   let fontColor = this.props.navigation.getParam('fontcolor');
  //   let fontfamily = this.props.navigation.getParam('textfont');
  //   let sticker = this.props.navigation.getParam('sticker');

  //   if(sticker && this.state.isText == false && this.state.temp_sticker != sticker){
  //     this.setState({isText: true});
  //     this.setState({
  //       stickers: [...this.state.stickers, sticker]
  //     });
  //     this.setState({temp_sticker: sticker});
  //   }

  //   if(textKey && this.state.isText == false && this.state.temp_text != textKey){
  //     this.setState({isText: true});
  //     this.setState({
  //       addedText: [...this.state.addedText, textKey],
  //       addedColor: [...this.state.addedColor, fontColor],
  //       addedFont: [...this.state.addedFont, fontfamily]
  //     });
  //     this.setState({temp_text: textKey});
  //   }
  // }

  // let categoriedImage = "http://165.22.179.40:81/media/" + this.props.navigation.getParam("category");
  let categoriedImage = require('../../assets/images/avatar-1.jpg');
  console.log('bg image =>', categoriedImage);
  let bgWidth = 500;
  let bgHeight = 700;
  return (
    <View style={styles.container}>
      <View style={styles.editor}>
        <View
          style={{
            paddingTop: 30,
            width: width * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            Please add high resolution image to
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            get high clearity phone cover
          </Text>
        </View>
      </View>
      <Mask shape={'rounded'}>
        <ViewShot
          viewShotRef="viewShot"
          options={{format: 'jpg', quality: 0.9}}>
          <View style={[styles.bgImageWrapper, {backgroundColor: 'white'}]}>
            <Gestures rotatable={true} scalable={{min: 0.1, max: 10}}>
              <Image
                source={{categoriedImage}}
                style={{width: bgWidth, height: bgHeight}}
              />
            </Gestures>
          </View>
          {avatar.map((ele, index) => (
            <View key={index} style={styles.generatedPic}>
              <Gestures rotatable={true} scalable={{min: 0.1, max: 10}}>
                <TouchableOpacity
                  onLongPress={() =>
                    Alert.alert(
                      'Delete item?',
                      'Do you want to delete this item?',
                      [
                        {text: 'OK', onPress: () => this.deleteItem({index})},
                        {text: 'Cancel'},
                      ],
                      {cancelable: false},
                    )
                  }>
                  <Image
                    source={ele.img}
                    style={styles.indi_pic}
                  />
                </TouchableOpacity>
              </Gestures>
              <Tooltip></Tooltip>
            </View>
          ))}

                   

{
                        stickers.map((ele, index)=> (
                          <View key={index} style={styles.generatedPic}>
                            <Gestures rotatable={true} scalable={{min: 0.1, max: 10}}>
                              <TouchableOpacity onLongPress={()=>
                                Alert.alert('Delete sticker?',
                                'Do you want to delete this sticker?',
                                [
                                  {text: 'OK', onPress:()=>this.deleteSticker({index})},
                                  {text: 'Cancel'}
                                ],
                                {cancelable: false}
                                )
                              }>
                                <Image source={ele.img} style={styles.indi_pic} />
                              </TouchableOpacity>
                            </Gestures>
                          </View>
                        ))
                      }
                      {
                        addedText.map((ele, index) => (
                          <View key={index} style={styles.generatedPic}>
                            <Gestures>
                              <TouchableOpacity onLongPress={()=>
                                Alert.alert('Delete this text?',
                                'Do you want to delete this item?',
                                [
                                  {text: 'OK', onPress: ()=> this.deleteText({index})},
                                  {text: 'Cancel'}
                                ],
                                {cancelable: false}
                                )
                              }>
                                <Text style={[{fontSize: 36}, {color: addedColor[index], fontFamily: addedFont[index]}]}>
                                    {addedText[index]}
                                </Text>
                              </TouchableOpacity>
                            </Gestures>
                          </View>
                        ))
                      }
                     
          <View pointerEvents="none">
            <View
              style={{
                width: phone_width / 4.5,
                height: phone_height / 4.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: phone_width / 4.5, height: phone_height / 4.5}}
                source={{uri: phoneModel}}
              />
            </View>
          </View>
        </ViewShot>
      </Mask>
      <BottomNavigation
        activeTab={activeTab}
        onTabPress={handleTabPress}
        renderTab={renderTab}
        tabs={tabs}
      />
    </View>
  );
};

export default CoverEditor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  editor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: height,
    width: width,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  bgImage: {
    width: 750,
    height: 550,
  },
  generatedPic: {
    position: 'absolute',
    top: height * 0.2,
    left: width * 0.1,
  },
  indi_pic: {
    width: 60,
    height: 60,
  },
});
