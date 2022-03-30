//https://medium.com/swlh/creating-a-react-native-app-with-wordpress-backend-b56f8dc1d21c
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Config from 'react-native-config';


import { fetchApiData } from './api';

const RESTAPI = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    const route = `posts?per_page=10&page=${page}`;
    fetchApiData(route).then(res => {
      if (res.code !== 'rest_post_invalid_page_number') {
        setPosts(prevPosts => [...prevPosts, ...res]);
      } else {
        setLastPage(true);
      }
      setLoading(false);
    });
  }, [page]);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 5 }}>
      {posts.length > 0 ? (
        <FlatList
          onEndReached={() => {
            if (!loading && !lastPage) {
              setPage(prevPage => prevPage + 1);
            }
          }}
          keyExtractor={item => item.id.toString()}
          data={posts}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Post', { id: item.id })}>
                <View>
                  <Text>{item.title.rendered}</Text>
                  <Text>{item.excerpt.rendered}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

// Posts.propTypes = {
//   navigation: PropTypes.object.isRequired,
// };

export default RESTAPI;