/* eslint-disable */
import React, {Component, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

// import {SliderBox} from './components/SliderBox'; // for develop time, first add:>>    yarn add react-native-snap-carousel
import {SliderBox} from 'react-native-image-slider-box';

const PhotoGallery = () => {
  const flatListRef = useRef();
  const {width} = Dimensions.get('window');
  const SPACING = 10;
  const THUMB_SIZE = 80;

  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = (indexSelected) => {
    setIndexSelected(indexSelected);
    flatListRef?.current?.scrollToOffset({
      offset: indexSelected * THUMB_SIZE,
      animated: true,
    });
  };

  const onTouchThumbnail = (touched) => {
    if (touched === indexSelected) return;

    carouselRef?.current?.snapToItem(touched);
  };


  const [images, setImages] = useState([
        'https://images.unsplash.com/photo-1496595351388-d74ec2c9c9cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80',
        'https://images.unsplash.com/photo-1500731753043-cbb4269ca2ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1385&q=80',
        'https://images.unsplash.com/photo-1522262139463-236991a708cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80',
        'https://images.unsplash.com/photo-1446059004666-8148312ba98b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1431&q=80',
        // require('./assets/images/girl.jpg'),
      ])
  

const onLayout = e => {
    
  };

  
    return (
      <SafeAreaView style={styles.container} onLayout={onLayout}>
        <SliderBox
          ImageComponent={FastImage}
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          //currentImageEmitter={index => console.warn(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          autoplay
          circleLoop
          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
          imageLoadingColor="#2196F3"
        />

<FlatList
        ref={flatListRef}
        horizontal={true}
        data={images}
        // style={{position: 'absolute', bottom: 80}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SPACING,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onTouchThumbnail(index)}
            activeOpacity={0.9}
          >
            <Image
              style={{
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                marginRight: SPACING,
                borderRadius: 16,
                borderWidth: index === indexSelected ? 4 : 0.75,
                borderColor: index === indexSelected ? 'orange' : 'white',
              }}
              source={item.image}
            />
          </TouchableOpacity>
        )}
      />
      </SafeAreaView>
    );
  
}
export default PhotoGallery;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});