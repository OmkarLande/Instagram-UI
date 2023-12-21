import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function Nav() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../images/Logo.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.icons}>
        <Image source={require('../images/Camera.png')} style={styles.icon} />
        <Image source={require('../images/Sent.png')} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  logoImage: {
    width: 105,
    height: 28,
    resizeMode: 'contain',
    tintColor: '#000000'

  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center', 
    tintColor: '#000000'
  },
  icon: {
    marginLeft: 20,
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#000000'

  },
});
