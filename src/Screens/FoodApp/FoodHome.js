import React from "react";
import { View, Text, SafeAreaView, Image, FlatList, StyleSheet, TouchableOpacity  } from 'react-native';
import {icons, images, COLORS, SIZES, FONTS} from './consts';
import {initialCurrentLocation, categoryData, restaurantData, affordable, fairPrice, expensive } from './consts/data'

const FoodHome = () => {

    // Dummy Datas
// import {icons,images} from './index'


    const [ categories , setCategories] = React.useState(categoryData);
    const [ selectedCategory , setSelectedCategory] = React.useState(null);
    const [ restaurants, setRestaurants ] = React.useState(restaurantData);
    const [ currentLocation, setCurrentLocation ] = React.useState(initialCurrentLocation);


    function onSelectCategory(category) {
        setSelectedCategory(category)
        console.log(selectedCategory);
    }

    function renderHeader(){
        return (
            <View style={{flexDirection:'row', height:50, marginTop:10}}>
                <TouchableOpacity style={{ width:50, justifyContent:'center'}}>
                <Image 
                    source={icons.nearby}
                    resizeMode="contain"
                    style={{ width:30, height:30}}
                />
                </TouchableOpacity>

                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <View style={{ width:'70%', height:'100%', alignItems:'center', justifyContent:'center', backgroundColor:COLORS.lightGray, borderRadius:20}}>
                        <Text style={{...FONTS.h3} }>
                            { currentLocation.streetName}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ width:50, justifyContent:'center'}}>
                <Image 
                    source={icons.nearby}
                    resizeMode="contain"
                    style={{ width:30, height:30}}
                />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories(){

        const renderItem = ({item}) => {
            return(
            <TouchableOpacity
            style={{
                paddingBottom: SIZES.padding * 2,
                borderRadius: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                marginRight: SIZES.padding,
                ...styles.shadow
            }}

            onPress={() => onSelectCategory(item)}
        >
                                <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
            <Text>{item.name}</Text>
            </View>
            </TouchableOpacity>
        
            )}
        return(
            <View>
                <Text style={[ FONTS.h1, FONTS.blacHead, {marginTop:40} ]}>Main</Text>
                <Text style={{...FONTS.h1, ...FONTS.blacHead}}>Categories</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />

        {/* <FlatList 
        columnWrapperStyle={{ justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop:10, paddingBottom:50}}
        numColumns={2}
        data={categories}
        renderItem={ ({item}) => <Text>{item.name}</Text> }
      /> */}
            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {/* <FlatList 
        columnWrapperStyle={{ justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop:10, paddingBottom:50}}
        numColumns={2}
        data={categories}
        renderItem={ ({item}) => <Text>{item.name}</Text> }
      /> */}
            {renderMainCategories()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{ flex:1, backgroundColor:'#fff'}
})
export default FoodHome;