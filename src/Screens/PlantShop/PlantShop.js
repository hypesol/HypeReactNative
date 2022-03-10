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

import { useDispatch, useSelector } from 'react-redux';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import plants from '../../consts/plants';

import COLORS from '../../consts/colors';
const width = Dimensions.get("screen").width/2-30;

const PlantShop = ( {navigation} ) => {
  // const myIcon1 = <Icon name="comments" size={30} color="#900" />; // Defaults to regular
  // const myIcon2 = <Icon name="comments" size={30} color="#900" solid />;
  // const myIcon3 = <Icon name="comments" size={30} color="#900" light />; // Only in FA5 Pro
  const stateData = useSelector((state) => state );

  const categories = ['POUPLAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
 const [ categoryIndex, setCategoryIndex ] = React.useState(0);

  const DATA = [
    {id: '1', name: 'A' },
    {id: '2', name: 'B' },
  ]
  // {
  //   DATA.map( item  => <Text key={item.id} style={{fontSize: 28}}> {item.name} </Text> )
  //   }

    
  const CategoryList = () => {
    return(
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity 
          activeOpacity={0.8}
          key={index} 
          onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.categoryTextSelected
              ]}
              >
              {item}
            </Text>

            </TouchableOpacity>
           ))}

      </View>
    )
  }
//navigation.navigate("PAGE COMPONENT NAME", "DATE SEND TO NEXT SCREEN")
  const Card =({ plant })=>{
    return ( 
    <TouchableOpacity onPress={() => navigation.navigate("PlantDetails", plant)}>
    <View style={styles.card}>
        <View style={styles.favicon}>
          <View style={{
            height:30,
            width:30,
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: plant.like 
            ? 'rgba(245,42,42,0.2)' 
            : 'rgba(0,0,0,0.2)'
          }}>
          <Icon name='favorite' size={18} color={ plant.like ? COLORS.red : COLORS.dark} />
          </View>
        </View>
        <View style={{height:100, alignItems:'center'}}>
          <Image source={plant.img} style={{ resizeMode: 'contain', flex:1}} />
        </View>
        <Text style={{fontWeight:'bold', fontSize:18, marginTop:10}}>
          {plant.name}
        </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>
          {plant.price}
        </Text>
        <View style={{
          width:25, height:25, backgroundColor:COLORS.green, justifyContent:'center', alignItems:'center', borderRadius:5
        }}>

          <Text style={{fontSize:18, color: COLORS.white, fontWeight:'bold', alignItems:'center' }}>+</Text>
        </View>
      </View>
      </View>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text>{console.log(stateData)}ddd</Text>
        <View>
          {/* <Text style={{fontSize: 22, fontWeight: 'bold'}}>Welcome to 2</Text> */}
          {/* <Text style={{fontSize: 32, fontWeight: 'bold', color:COLORS.green, }}>Market Place</Text> */}
        </View>
        <Icon name="shopping-cart" size={32} color="green" />
      </View>
      <View style={styles.search}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={24} />
          <TextInput placeholder='Search' style={styles.searchTxt} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name='sort' size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList 
        columnWrapperStyle={{ justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop:10, paddingBottom:50}}
        numColumns={2}
        data={plants}
        renderItem={ ({item}) => <Card plant={item} /> }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItem:'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
      flexDirection: 'row',
      marginTop: 28
  },
  searchContainer:{
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchTxt:{
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
    color: COLORS.dark
  },
  sortBtn:{
    marginLeft: 10,
    height: 50,
    backgroundColor: COLORS.green,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryContainer:{
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  categoryText:{
    fontSize: 16, 
    color: 'grey',
    fontWeight: 'bold'
  },
  categoryTextSelected:{
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card:{
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20 ,
    padding: 15
  },
  favicon:{
    alignItems:'flex-end'
  }
});

export default PlantShop;
