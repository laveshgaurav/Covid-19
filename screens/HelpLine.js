import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import help from './help.json';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'expo-ads-admob';

const HelpLine = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{ position: 'absolute', left: '2%', top: 24 }}
      >
        <Ionicons name='md-menu' name='md-menu' color='#71B1DD' size={48} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center', margin: 28 }}>
        <Text style={{ color: '#71B1DD', fontWeight: 'bold', fontSize: 18 }}>
          {help.name}
        </Text>
        <Text>Central Helpline Number</Text>
        <Text
          style={{ color: 'white', backgroundColor: '#71B1DD', padding: 12 }}
          onPress={() => {
            Linking.openURL('tel:{+91-11-23978046}');
          }}
        >
          +91-11-23978046
        </Text>
      </View>
      <AdMobBanner
        bannerSize='banner'
        adUnitID='ca-app-pub-5757917852375653/2428636182' // Test ID, Replace with your-admob-unit-id
        ttestDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={(error) => console.log(error)}
        servePersonalizedAds={false} // true or false
        // onDidFailToReceiveAdWithError={this.bannerError()}
      />
      <ScrollView style={{ marginBottom: 120 }}>
        {help.query.map((query) => {
          return (
            <View key='{query.name}'>
              <View
                style={{
                  margin: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#71B1DD' }}>{query.state}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                    alignItems: 'center',
                    backgroundColor: '#71B1DD',
                    borderRadius: 6,
                  }}
                >
                  <Text>
                    <MaterialIcons name='local-phone' color='white' size={24} />
                  </Text>
                  <Text
                    style={{ color: 'white' }}
                    onPress={() => {
                      Linking.openURL('tel:{query.number}');
                    }}
                  >
                    {query.number}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <AdMobBanner
        bannerSize='banner'
        adUnitID='ca-app-pub-5757917852375653/2428636182' // Test ID, Replace with your-admob-unit-id
        ttestDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={(error) => console.log(error)}
        servePersonalizedAds={false} // true or false
        // onDidFailToReceiveAdWithError={this.bannerError()}
      />
    </View>
  );
};

export default HelpLine;
