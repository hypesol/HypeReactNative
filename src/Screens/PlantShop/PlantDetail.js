import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  TextInput,
  ColorPropType,
  FlatList,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import plants from '../../consts/plants';

import COLORS from '../../consts/colors';
const width = Dimensions.get("screen").width/2-30;


//route parameter will use to get data
const PlantDetail = ( {navigation, route} ) => {
    
  const plant = route.params;
//   console.log(plant);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      {/* <Button title='Home' onPress={()=> navigation.navigate("PlantShop")} /> */}
        <Icon name="arrow-back" size={28} color="green" onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={32} color="green" />

      </View>
      <View style={styles.productImage}>
        <Image source={plant.img} style={{ resizeMode:'contain', flex:1 }} />
      </View>
      <View style={styles.detailContent}>
          <View style={{ flexDirection:'row', alignItems:'flex-end', marginLeft:20}}>
            <View style={styles.line} />
            <Text style={{ fontSize:18, fontWeight:'bold'}}>Best Choiice</Text>
          </View>
          <View
            style={{ marginLeft:20, marginTop:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
          >
              <Text style={{fontWeight:'bold', fontSize:22  }}>{plant.name}</Text>
              <View style={styles.priceTag}>
                <Text style={{color:COLORS.white, fontWeight:'bold', fontSize:16}}>{plant.price}</Text>
              </View>
          </View>
          <View style={{paddingHorizontal:20, marginTop:20}}>
                  <Text style={{fontWeight:'bold', fontSize:20}}>About</Text>
                  <Text>{plant.about}</Text>
          </View>

          <View style={{marginTop:20,flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Pressable style={styles.borderBtn}>
                    <Text style={styles.borderBtnTxt}>-</Text>
                </Pressable>
                    <Text style={{fontSize:20, fontWeight:'bold', marginHorizontal:10}}> 1</Text>
                <Pressable style={styles.borderBtn}>
                    <Text style={styles.borderBtnTxt}>+</Text>
                </Pressable>
            </View>
            <View>
                <Pressable  style={{ width:150, height:40, backgroundColor:COLORS.green, justifyContent:'center', alignItems:'center', borderRadius:30}}>
                    <Text style={{color:COLORS.white, fontSize:18, fontWeight:'bold'}}>Buy Now</Text>
                    </Pressable> 
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:COLORS.white,
    flex:1
  },
  header:{
    paddingHorizontal:20, 
    marginTop:20, 
    flexDirection:'row',
    justifyContent:'space-between'
  },
  productImage:{
    flex:0.45,
    alignItems:'center',
    justifyContent:'center',
  },
  detailContent:{
    flex:0.55,
    backgroundColor:COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius:20,
    marginTop:30,
    paddingTop:30
  },
  line: {
    width:25, 
    height:3, 
    backgroundColor:COLORS.dark, 
    marginBottom:5, 
    marginRight:3
  },
  priceTag:{
      backgroundColor:COLORS.green,
      width:80,
      height:40,
      borderTopLeftRadius:25,
      borderBottomLeftRadius:25,
      alignItems:'center',
      justifyContent:'center'
  },
  borderBtn:{
    borderColor:'grey',
    borderWidth:1,
    borderRadius:5,
    width:60,
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
  borderBtnTxt:{

  }

});

export default PlantDetail;
