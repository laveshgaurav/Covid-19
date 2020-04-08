import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import exampleJson from './faq.json';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'expo-ads-admob';
const Faq = ({ navigation }) => {
  const [count, setcount] = useState(true);
  function load() {
    setcount(false);
  }
  let ans = null;

  return (
    <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{ position: 'absolute', left: '2%', top: 24 }}
      >
        <Ionicons name='md-menu' name='md-menu' color='#71B1DD' size={48} />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 48,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#71B1DD', fontWeight: 'bold', fontSize: 36 }}>
          {exampleJson.name} FAQ
        </Text>
        <AdMobBanner
          bannerSize='banner'
          adUnitID='ca-app-pub-5757917852375653/2428636182' // Test ID, Replace with your-admob-unit-id
          ttestDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={(error) => console.log(error)}
          servePersonalizedAds={false} // true or false
          // onDidFailToReceiveAdWithError={this.bannerError()}
        />
        <ScrollView style={{ marginBottom: 108 }}>
          {exampleJson.query.map((query) => {
            return (
              <View key='{query.name}'>
                <View style={{ margin: 12 }}>
                  <Text
                    // onPress={() => console.log('Pressed')}
                    // onPress={() => load()}
                    style={{
                      color: '#71B1DD',
                      paddingHorizontal: 12,
                      fontSize: 24,
                    }}
                  >
                    {query.que}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'justify',
                      paddingHorizontal: 12,
                      fontSize: 16,
                    }}
                  >
                    {query.ans}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Faq;
