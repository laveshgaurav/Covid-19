import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import image from '../assets/stayHome.png';
import virus from '../assets/virus.png';

export default function Raw() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 40, color: '#71B1DD' }}>
          C<Image source={virus} style={{ width: 40, height: 40 }} />
          VID-19
        </Text>
      </View>

      <Image source={image} style={{ width: '100%', height: '40%' }} />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#676767' }}>
          Stay <Text style={{ color: '#71B1DD' }}>Raw !</Text>
        </Text>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#676767' }}>
          Stay <Text style={{ color: '#71B1DD' }}>Safe !</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }}>KNOW MORE</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#71B1DD',
    width: 280,
    height: 60,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    // padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
