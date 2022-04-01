//https://www.youtube.com/watch?v=66Lf60PjnBE&ab_channel=PradipDebnath
// extensions apollo-boost, graphql, graphql-tag, react-apollo
import React, {useEffect, useState} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

const GRAPHQL = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {}, []);

  const GqlHomeScreen = () => {
    return (
      <View>
        <Text style={{fontSize: 20}}>Home Screen</Text>
        <Button
          title="Click me"
          onPress={() => navigation.navigate('GqlDetailScreen')}
        />
      </View>
    );
  };

  const GqlDetailScreen = () => {
    return (
      <View>
        <Text style={{fontSize: 20}}>Detail Screen</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 24}}>
      <GqlHomeScreen />
      <View>
        <Text style={{fontSize: 42}}>Test</Text>
      </View>
    </SafeAreaView>
  );
};

export default GRAPHQL;
