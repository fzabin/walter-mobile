import * as React from 'react';

import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { Platform, StatusBar as RNStatusBar, StyleSheet, Text, View } from 'react-native';

import Heading from '../components/Heading';

export default function HomeScreen() {
  React.useEffect(() => {
    NavigationBar.setBackgroundColorAsync('black')
  }, [])

  return (
    <View style={styles.wrapper}>
      <StatusBar style="light" backgroundColor="#1d1c21" />
      <View style={styles.header}>
        <Heading size="huge">Hello, Jose</Heading>
      </View>
      <View style={styles.cardWrapper}>
        <Text style={styles.cardLabel}>Current value</Text>
        <Text style={styles.cardPrimaryText}>R$ 1.103,14</Text>
        <View style={styles.cardRow}>
          <View style={styles.cardColumn}>
            <Text style={styles.cardLabel}>Income</Text>
            <Text style={styles.cardSecondaryText}>+R$ 4.555,12</Text>
          </View>
          <View style={styles.cardColumn}>
            <Text style={styles.cardLabel}>Expense</Text>
            <Text style={styles.cardSecondaryText}>-R$ 3.451,98</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android'
      ? RNStatusBar.currentHeight
      : 0,
    backgroundColor: '#1d1c21',
  },
  header: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  cardWrapper: {
    marginTop: 8,
    marginHorizontal: 20,
    marginBottom: 32,
    padding: 24,
    backgroundColor: '#cae7ea',
    borderRadius: 18,
  },
  cardLabel: {
    fontSize: 14,
    color: '#606060',
  },
  cardPrimaryText: {
    marginBottom: 8,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardSecondaryText: {
    fontSize: 18,
    color: '#000000',
    marginRight: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardColumn: {
    flexDirection: 'column',
  }
})