import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const arrow = require('../assets/ic_arrow_grey_small.png');
const Section = (props) => {
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 16,
        // borderColor: 'purple',
        // borderWidth: 2,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Section Header</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('regions');
        }}>
        <Image
          width={16}
          height={14}
          style={{
            width: 16,
            height: 14,
            resizeMode: 'contain',
          }}
          source={arrow}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Section;
