import React, {useState, useRef} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

import Gallery from 'react-native-image-gallery';


import { TEMPIMGS } from '../../../consts';
const {width} = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: TEMPIMGS.TEMPIMGS.temp_image_1,
  image2: TEMPIMGS.TEMPIMGS.temp_image_2,
  image3: TEMPIMGS.TEMPIMGS.temp_image_3,
  image4: TEMPIMGS.TEMPIMGS.temp_image_4,
  image5: TEMPIMGS.TEMPIMGS.temp_image_5,
  image6: TEMPIMGS.TEMPIMGS.temp_image_6,
  image7: TEMPIMGS.TEMPIMGS.temp_image_7,
};

const PhotoGallery = () => {
  const carouselRef = useRef();
  const flatListRef = useRef();
  // const [images, setImages] = useState([
  //   IMAGES.image1,
  //   IMAGES.image2,
  //   IMAGES.image3,
  //   IMAGES.image4,
  //   IMAGES.image5,
  //   IMAGES.image6,
  //   IMAGES.image7,
  // ]);

  const [imagesT, setImages] = useState([
    {id: '1', image: IMAGES.image1},
    {id: '2', image: IMAGES.image2},
    {id: '3', image: IMAGES.image3},
    {id: '4', image: IMAGES.image4},
    {id: '5', image: IMAGES.image5},
    {id: '6', image: IMAGES.image6},
    {id: '7', image: IMAGES.image7},
  ]);

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

  return (
    <View style={{backgroundColor: 'black', alignItems: 'center'}}>
      <Text
        style={{color: 'white', fontSize: 32, backgroundColor:"gray"}}
      >
        Custom Gallery
      </Text>
    {console.log(imagesT)}
      <Gallery
        style={{  backgroundColor: 'white', height:200 }}
        images= {imagesT}
        renderCustomImage={()=> <Image source={imagesT.url} style={{width:400, height:200}}></Image>}
        // images={[
        //   // { source: TEMPIMGS.TEMPIMGS.temp_image_7, dimensions: { width: 150, height: 150 } },
        //   { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
        //   { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
        //   { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
        //   { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
        // ]}
      />

      {/* Carousel View */}
      <View style={{flex: 1 / 2, marginTop: 20}}>
        {/* <Carousel
          ref={carouselRef}
          layout="default"
          data={images}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => onSelect(index)}
          renderItem={({item, index}) => (
            <Image
              key={index}
              style={{width: '100%', height: 100}}
              resizeMode="contain"
              source={item.image}
            />
          )}
        /> */}
        
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 32,
          alignSelf: 'flex-end',
        }}
      >
        <Text style={{color: 'white', fontSize: 22}}>
          {indexSelected + 1}/{imagesT.length}
        </Text>
      </View>
      <Text style={{color:'white'}}> Thumbnail component using FlatList </Text>
      <FlatList
        ref={flatListRef}
        horizontal={true}
        data={imagesT}
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
    </View>
  );
};

export default PhotoGallery;