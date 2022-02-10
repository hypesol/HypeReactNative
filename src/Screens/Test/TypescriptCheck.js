import React from 'react';
import {View, Text} from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
      Home: undefined;
      Profile: { userId: string };
      Feed: { sort: 'latest' | 'top' } | undefined;
    };

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
type ProfileScreenNavigationProp = Props['navigation'];


const TypeCheck = ({ route, navigation }: Props) => {
    return (
      <View>
            <Text>
                  Test
                  {/* {console.log(Props)} */}
            </Text>
      </View>
      )
}

export default TypeCheck;