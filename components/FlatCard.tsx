import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function FlatCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.normalText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.normalText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.normalText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.normalText}>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#1e1e1e',
    paddingLeft: 10,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    padding: 8,
  },
  normalText: {
    fontSize: 18,
    color: '#ffffff',
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
