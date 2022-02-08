import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  Platform
} from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import { useNavigation, useRoute } from '@react-navigation/native';
import Video from 'react-native-video';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const landingVideo = require('../../../assets/videos/sample.mp4');


const LandingScreen = () => {

  const navigation = useNavigation();

  // const gotoSign = (page) =>{
    function gotoSign(page){
    // console.log(page);
      navigation.navigate(page);
  }

  return (
    <View style={styles.backgroundStyle}>
      <StatusBar translucent={true} hidden={true} />
        <View style={styles.sectionTop}>
          <Video
            source={landingVideo}
            style={styles.backgroundVideo}
            resizeMode={"cover"}
            repeat={true}
          />
        </View>

        <View style={styles.sectionBottom}>
          <TouchableOpacity style={styles.singUpBtn}
            activeOpacity={0.8}
            onPress={ () => gotoSign("signup")  }
          >
            <Text style={[styles.loginTxt, { color: '#3BB54A' }]}>
              Sign up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}
              activeOpacity={0.8}
              onPress={ () => gotoSign("login")  }
            >
              <Text style={styles.loginTxt}>
                Login
              </Text>
            </TouchableOpacity>
            
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
    // aspectRatio: WIDTH/HEIGHT,
  },

  sectionTop: {
    flex: 1,
    alignItems: 'center',
  },

  sectionBottom: { 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    position: 'absolute', 
    zIndex: 3333, 
    bottom: 20 
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  loginBtn: {
    width: 150, 
    height: 40, 
    backgroundColor: '#3BB54A', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 20
  },

  singUpBtn: {
    width: 150, 
    height: 40, 
    borderColor: '#3BB54A', 
    borderWidth: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 20
  },
}
);

export default LandingScreen;
