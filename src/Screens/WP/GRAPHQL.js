//https://www.youtube.com/watch?v=66Lf60PjnBE&ab_channel=PradipDebnath
// extensions apollo-boost, graphql, graphql-tag, react-apollo/@apollo/client graphql
//https://ejazahmad.com/graphql

import React, {useEffect, useState} from 'react';
// import ApolloClient from 'apollo-boost';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import { render } from 'react-dom';

import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';


  const client = new ApolloClient({
    // uri: 'https://ejazahmad.com/graphql',
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
  });

const GRAPHQL = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [lastPage, setLastPage] = useState(false);


  useEffect(() => {}, []);

  const GqlHomeScreen = ({navigation}) => {
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
  function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }
  return (
    <ApolloProvider client={client}>

      <SafeAreaView style={{flex: 1, paddingTop: 24}}>
      <ExchangeRates />
        <GqlHomeScreen />
        <View>
          <Text style={{fontSize: 42}}>Test</Text>
        </View>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default GRAPHQL;
