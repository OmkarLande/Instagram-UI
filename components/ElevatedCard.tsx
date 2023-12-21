import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.normalText}>Green</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.normalText}>Green</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.normalText}>Green</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.normalText}>Green</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.normalText}>Green</Text>
        </View>
      </ScrollView>
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
    paddingLeft: 18,
},
card: {
    justifyContent: 'space-around',
    paddingLeft: 18,
      paddingHorizontal: 12,
    width: 100,
    height: 100,
    borderRadius: 4,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: 'green',
  },
  normalText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
