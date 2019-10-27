import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/articles.style';

import { getDescription } from '../utils/helpers';

const Articles = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    console.log('Articles render!', articles);
    async function fetchData() {
      let page = 1;
      let perPage = 4;
      if(props.mkey === 'latest') {
        perPage = 8;
      }
      if(props.mkey === 'spotlight') {
        page = 2;
        perPage = 4;
      }
      if(props.mkey === 'editor-picks') {
        page = 3;
        perPage = 4;
      }
      const furl = `https://thetheatretimes.com/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`;
      const res = await fetch(furl);
      const posts = await res.json();
      setArticles(posts);
    }
    fetchData();
    return () => console.log('Articles unmounting...');
  }, [setArticles]);

  renderArticle = (b, horizontal) => {
    console.log('B', b);
    const blogItemStyles = [styles.blogItem];
    const blogImageStyles = [styles.blogImage];
    if (horizontal) {
      blogItemStyles.push(styles.blogHItem);
      blogImageStyles.push(styles.blogHImage);
    }
    const blogTitle = getDescription(b.title.rendered, 200);
    const blogData = {
      id: b.id,
      slug: b.slug,
      title: blogTitle,
      content: b.content.rendered,
      featuredImage: b.jetpack_featured_media_url,
      date: b.date,
      link: b.link,
    };
    return (
      <TouchableOpacity
        key={b.id}
        onPress={() => props.navigation.navigate('article', blogData)}>
        <View style={blogItemStyles}>
          <Image
            style={blogImageStyles}
            source={{uri: b.jetpack_featured_media_url}}
          />
          <Text style={styles.blogTitle} numberOfLines={3}>
            {blogTitle}
          </Text>
          {b.date && <Text style={styles.blogPublishedDate}>{b.date}</Text>}
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
          data={articles}
          renderItem={({item}) => renderArticle(item, styles.blogHItem)}
          keyExtractor={item => item.id+''}
        />
      )}
      {!props.horizontal &&
        articles &&
        Array.isArray(articles) &&
        articles.map(b => renderArticle(b))}
    </View>
  );
};

export default Articles;
