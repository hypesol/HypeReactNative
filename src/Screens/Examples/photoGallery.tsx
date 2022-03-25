import React, {useState, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useIsFocused} from '@react-navigation/native';


import { TEMPIMGS } from '../../../consts';
import ApiConfig from '../../../config/api-config';
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

interface IProps {
  images: any;
  index: number;
}
const PhotoGallery: React.FC<IProps> = ({images, index}: IProps) => {
  const carouselRef = useRef();
  const flatListRef = useRef();
  const isFocused = useIsFocused();
  const [imagesData, setImages] = useState([]);

  let prodImageArray = {};
  let imagesArray = [];
  
  const [imagess, setImagess] = useState([
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


  useEffect(() => {
    if (isFocused) {
      if (images.length > 0) {
        images.map((image, index) => {
          let productImg =
            'https://s3-us-west-2.amazonaws.com/seebiz-images/img/product_default.png';
          if (image) {
            productImg = ApiConfig.BUCKET_URL + image['100'];
            prodImageArray = {
              id: index,
              url: productImg,
              image: productImg,
            };
          }
          imagesArray.push(prodImageArray);
        });
      }
      setImages(imagesArray);
    }
  }, [isFocused]);

  console.log("LOCAL ARRAY ----- ",imagess)
  console.log("LIVE ARRAY ----- ",imagesData)
  return (
    <View style={{backgroundColor: 'black', alignItems: 'center'}}>
      <Text
        style={{color: 'white', fontSize: 32, backgroundColor:"gray"}}
      >
        Custom Gallery
      </Text>
      {/* Carousel View */}
      <View style={{flex: 1 / 2, marginTop: 20}}>
        <Carousel
          ref={carouselRef}
          layout="default"
          data={imagesData}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => onSelect(index)}
          renderItem={({item, index}) => (            
            <View>
            <Image
              key={index}
              style={{width: '100%', height: 100}}
              resizeMode="contain"
              source={{uri: item.url}}
            />
            {/* <Text style={{color:'white'}}>==== {item.url} ====</Text> */}
            </View>
          )}
        />
        <Pagination
          inactiveDotColor="gray"
          dotColor={'orange'}
          activeDotIndex={indexSelected}
          dotsLength={imagesData.length}
          animatedDuration={150}
          inactiveDotScale={1}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 32,
          alignSelf: 'flex-end',
        }}
      >
        <Text style={{color: 'white', fontSize: 22}}>
          {indexSelected + 1}/{imagesData.length}
        </Text>
      </View>
      <Text style={{color:'white'}}> Thumbnail component using FlatList </Text>
      <FlatList
        ref={flatListRef}
        horizontal={true}
        data={imagesData}
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
              source={{uri:item.image}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PhotoGallery;