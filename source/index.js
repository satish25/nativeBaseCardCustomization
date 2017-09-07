

import React, { Component } from 'react';
import { Image, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Swiper from 'react-native-swiper'

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/download.jpeg'),
    image1: require('./img/download1.jpeg'),
    image2: require('./img/download2.jpeg'),
  },  {
      text: 'Card Two',
      name: 'One',
      image: require('./img/download.jpeg'),
      image1: require('./img/download1.jpeg'),
      image2: require('./img/download2.jpeg'),
    },  {
        text: 'Card Three',
        name: 'One',
        image: require('./img/download.jpeg'),
        image1: require('./img/download1.jpeg'),
        image2: require('./img/download2.jpeg'),
      },  {
          text: 'Card Four',
          name: 'One',
          image: require('./img/download.jpeg'),
          image1: require('./img/download1.jpeg'),
          image2: require('./img/download2.jpeg'),
        },
];

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>

                <CardItem cardBody>
                  <Swiper  height={200}  horizontal={false} autoplay={false}
                    dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                      bottom: -23, left: null, right: 10
                    }}>
                      <View>
                        <Image  source={item.image1} />
                      </View>
                      <View>
                        <Image  source={item.image2} />
                      </View>
                      <View >
                        <Image  source={item.image1} />
                      </View>
                    </Swiper>
                </CardItem>

              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}
