import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class VectorIcon extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
  render() {
        return (
        <View>
        <Text>1SSSSS</Text>
            <Icon name="comments" size={30} color="#900" solid />
        </View>
        )
    }
}

export default VectorIcon;