import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/articles.style';

const Articles = props => {
  renderArticle = b => {
    return (
      <TouchableOpacity>
        <View style={styles.blogItem}>
          <Image
            style={styles.blogImage}
            source={{uri: b.illustration}}
          />
          <Text style={styles.blogTitle}>{b.title}</Text>
          {
            b.date && (
              <Text style={styles.blogPublishedDate}>{b.date}</Text>
            )
          }
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 16,
        flexWrap: 'wrap',
      }}>
      {props.horizontal && (
        <FlatList
          horizontal
          data={props.data}
          renderItem={({item}) => renderArticle(item)}
          keyExtractor={item => item.title}
        />
      )}
      {!props.horizontal && props.data.map(b => this.renderArticle(b))}
    </View>
  );
};

export default Articles;
