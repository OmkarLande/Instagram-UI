import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    // <View style={styles.container}>
      <View style={styles.footerContainer}>
        <Image source={require('../images/Home.png')} />
        <Image source={require('../images/Search.png')} />
        <Image source={require('../images/Create.png')} />
        <Image source={require('../images/Like.png')} />
        <Image source={require('../images/Dope.png')} />
      </View>
    // </View>
  );
}

const styles = StyleSheet.create({

  footerContainer: {
      backgroundColor: '#ffffff',
      // paddingHorizontal: 26,
      paddingVertical: 10,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  
});
