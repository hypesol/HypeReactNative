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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const myIcon1 = <Icon name="comments" size={30} color="#900" />; // Defaults to regular
  const myIcon2 = <Icon name="comments" size={30} color="#900" solid />;
  const myIcon3 = <Icon name="comments" size={30} color="#900" light />; // Only in FA5 Pro

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>Market Place</Text>
        </View>
        <Icon name="shopping-cart" size={32} color="green" />
      </View>
      <View style={styles.search}>
      </View>
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
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
      flexDirection: 'row',
      marginTop:28
  }
});

export default Home;
