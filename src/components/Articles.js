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
  renderArticle = (b, horizontal) => {
    const blogItemStyles = [
      styles.blogItem,
    ];
    const blogImageStyles = [
      styles.blogImage,
    ];
    if(horizontal) {
      blogItemStyles.push(styles.blogHItem);
      blogImageStyles.push(styles.blogHImage);
    }
    return (
      <TouchableOpacity key={b.title}>
        <View style={blogItemStyles}>
          <Image
            style={blogImageStyles}
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
          renderItem={({item}) => renderArticle(item, styles.blogHItem)}
          keyExtractor={item => item.title}
        />
      )}
      {!props.horizontal && props.data.map(b => this.renderArticle(b))}
    </View>
  );
};

export default Articles;
