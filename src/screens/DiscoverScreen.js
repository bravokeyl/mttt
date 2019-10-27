import React from 'react';
import {SafeAreaView, Platform, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import SliderEntry from '../components/SliderEntry';
import styles, {colors} from '../styles/index.style';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import {ENTRIES1, ENTRIES2} from '../static/entries';
import Section from '../components/Section';

const chatIcon = require('../assets/chat-bubble-50.png');
const openBookIcon = require('../assets/ic_discount_discover.png');
const coinIcon = require('../assets/ic_free_coin.png');
const popularIcon = require('../assets/ic_ranking.png');

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

class DiscoverScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  _renderItem({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  navigateToScreen = (screen) => {
    this.props.navigation.navigation(screen);
  }

  render() {
    
    const actionItems = [
      {
        key: 'popular',
        name: 'Popular',
        icon: popularIcon,
      },
      {
        key: 'regions',
        name: 'Community',
        icon: chatIcon,
      },
      {
        key: 'free-now',
        name: 'Free Now',
        icon: openBookIcon,
      },
      {
        key: 'coins',
        name: 'Coins',
        icon: coinIcon,
      },
    ];
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Carousel
            ref={c => (this._slider1Ref = c)}
            data={ENTRIES1}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            firstItem={SLIDER_1_FIRST_ITEM}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop={true}
            loopClonesPerSide={2}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingHorizontal: 16,
              height: 90,
            }}>
            {actionItems.map(e => {
              return (
                <TouchableOpacity key={e.key} onPress={() => this.props.navigation.navigate(e.key)}>
                  <View style={{alignItems: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={e.icon} />
                    <Text
                      style={{
                        marginTop: 6,
                        textTransform: 'uppercase',
                        fontSize: 11,
                      }}>
                      {e.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <Section navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default DiscoverScreen;
