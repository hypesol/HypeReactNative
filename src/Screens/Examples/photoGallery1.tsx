import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  Text,
  Button,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
// import {ImageGallery} from '@georstat/react-native-image-gallery';
import {useIsFocused} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {
  BUTTONS,
  COLORS,
  CSTYLES,
  FONTS,
  ICONS,
  MARGINS,
  SIZES,
} from '../../../consts';

const {width} = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../detail/styles';
import ApiConfig from '../../../config/api-config';

interface IProps {
  images: any;
  index: number;
}
const PhotoGallery: React.FC<IProps> = ({images, index}: IProps) => {
  // console.log("ARRAY", images)
  const isFocused = useIsFocused();
  const [isOpen, setIsOpen] = useState(false);
  const [imagesData, setImages] = useState([]);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  let prodImageArray = {};
  let imagesArray = [];
  let newImages: any;

  const carouselRef = useRef();
  const [indexSelected, setIndexSelected] = useState(0);

  const [carouselImages, setCarouselImages] = useState([
    {
      id: '1',
      image:
        'https://s3-us-west-2.amazonaws.com/seebiz/6220c76ffcecca19de9272ba/products/6221d948b384be31cfcbd8a3/100/fogg-fresh-body-spray-for-men-combo-pack-of-4-BE31CFCBD8A3-sv6.jpeg',
    },
    {
      id: '2',
      image:
        'https://s3-us-west-2.amazonaws.com/seebiz/6220c76ffcecca19de9272ba/products/6221d948b384be31cfcbd8a3/100/fogg-fresh-body-spray-for-men-combo-pack-of-4-BE31CFCBD8A3-8u4.jpeg',
    },
    {
      id: '3',
      image:
        'https://s3-us-west-2.amazonaws.com/seebiz/6220c76ffcecca19de9272ba/products/6221d948b384be31cfcbd8a3/100/fogg-fresh-body-spray-for-men-combo-pack-of-4-BE31CFCBD8A3-wYG.jpeg',
    },
    {
      id: '4',
      image:
        'https://s3-us-west-2.amazonaws.com/seebiz/6220c76ffcecca19de9272ba/products/6221d948b384be31cfcbd8a3/100/fogg-fresh-body-spray-for-men-combo-pack-of-4-BE31CFCBD8A3-Hz0.jpeg',
    },
    {
      id: '5',
      image:
        'https://s3-us-west-2.amazonaws.com/seebiz/6220c76ffcecca19de9272ba/products/6221d948b384be31cfcbd8a3/100/fogg-fresh-body-spray-for-men-combo-pack-of-4-BE31CFCBD8A3-rYv.jpeg',
    },
  ]);

  useEffect(() => {
    if (isFocused) {
      if (images.length > 0) {
        images.map((image, index) => {
          //  console.log('Receiver data ID: ', image);
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
          //   imagesArray.push(productImg);
          imagesArray.push(prodImageArray);
        });
      }
      setImages(imagesArray);
    }
    // newImages = imagesData.toString().replace("(^\\[|\\]$)", "");
  }, [isFocused]);

  const RenderPhotos = () => {
    // console.log('----images 111Array---', imagesData);
    return (
      <View>
        <Text>Gallery Thumbs</Text>
        <FlatList
          data={imagesData}
          horizontal
          keyExtractor={(item, index) => `id_${index}_${Math.random()}`}
          renderItem={renderCarousel}
          // renderItem={() => <Text>.</Text>}
        />
        {imagesData.length > 0 ? (
          imagesData.map((image, index) => {
            return (
              <View key={`L2_${Math.random() * 100 + 1}`}>
                {/* {console.log(image.url)} */}
                <Text>Hello - {index}</Text>
                <Image
                  source={{uri: image.url}}
                  style={{width: 40, height: 40}}
                />
              </View>
            );
          })
        ) : (
          <Text>No Image</Text>
        )}
      </View>
    );
  };
  const renderCarousel = ({item, index}) => {
    {
      // console.log('TEST ID', item.id);
    }
    return (
      <View>
        <Text>Hi {item.id}</Text>
        <Image
          key={index}
          style={{width: 100, height: 100}}
          resizeMode="contain"
          source={{uri: item.url}}
        />
      </View>
    );
  };

  return (
    <>
      {/* <View style={{flex: 1, alignItems: 'center'}}>
        <Text> Carousel View </Text>
        <View style={{flex: 1, marginTop: 20}}>
          {console.log(imagesData)}
          <Carousel
            ref={carouselRef}
            layout="default"
            data={imagesData}
            sliderWidth={width}
            itemWidth={width}
            //   onSnapToItem={(index) => onSelect(index)}
            renderItem={({item, index}) => (
              <Image
                key={index}
                style={{width: '100%', height: 100}}
                resizeMode="contain"
                source={item.image}
              />
            )}
          />
        </View>
      </View> */}
      <RenderPhotos />
      <View>
        <Button onPress={openGallery} title="Open Gallery" />
        {/* <ImageGallery
          close={closeGallery}
          isOpen={isOpen}
          images={imagesData}
        /> */}
      </View>
    </>
  );
};

export default PhotoGallery;
