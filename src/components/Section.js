import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Articles from './Articles';

const arrow = require('../assets/ic_arrow_grey_small.png');
const Section = props => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 16,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {props.headingText}
        </Text>
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
      <Articles data={props.data} horizontal={props.horizontal} />
    </View>
  );
};

export default Section;
