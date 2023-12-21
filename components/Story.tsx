import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Story() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.story}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../images/Story6.png')}
              style={styles.mainImage}
            />
          </View>
          <Text style={styles.mainText}>Your Story</Text>
        </View>
        <View style={styles.story}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../images/Story2.png')}
              style={styles.mainImage}
            />
          </View>
          <Text style={styles.mainText}>Your Story</Text>
        </View>
        <View style={styles.story}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../images/Story3.png')}
              style={styles.mainImage}
            />
          </View>
          <Text style={styles.mainText}>Your Story</Text>
        </View>
        <View style={styles.story}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../images/Story4.png')}
              style={styles.mainImage}
            />
          </View>
          <Text style={styles.mainText}>Your Story</Text>
        </View>
        <View style={styles.story}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../images/Story5.png')}
              style={styles.mainImage}
            />
          </View>
          <Text style={styles.mainText}>Your Story</Text>
        </View>
        <View style={styles.story}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../images/Story1.png')}
              style={styles.mainImage}
            />
          </View>
          <Text style={styles.mainText}>Your Story</Text>
        </View>
        <View style={styles.story}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../images/Story7.png')}
              style={styles.mainImage}
            />
          </View>
          <Text style={styles.mainText}>Your Story</Text>
        </View>
        <View style={styles.story}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../images/Story8.png')}
              style={styles.mainImage}
            />
          </View>
          <Text style={styles.mainText}>Your Story</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 9,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  story: {
    alignItems: 'center',
    marginRight: 15,
  },
  circularImageContainer: {
    width: 62,
    height: 62,
    
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mainText: {
    marginTop: 4,
    color: '#1e1e1e',
  },
});
