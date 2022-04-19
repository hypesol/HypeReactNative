import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import CoverEditor from './CoverEditor';


const ProductDesigner = () => {
  return (
    <View style={[styles.container, {display:none}]}>
      <View style={styles.buttonCover}>
        <View style={[styles.button1, styles.button]}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('CustomedCategory', {
                phoneModel: this.state.model,
              });
            }}>
            <Text>Select From Catalogue</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button2, styles.button]}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('CoverEditor', {
                phoneModel: this.state.model,
              });
            }}>
            <Text>Create Custom</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProductDesigner;

const styles = StyleSheet.create({});
