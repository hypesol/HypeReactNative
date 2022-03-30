import Config from 'react-native-config';

const API_URL = "https://ejazahmad.com/wp-json/wp/v2/";
export const fetchApiData = async route => {
  try {
    const response = await fetch(API_URL + route);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
};