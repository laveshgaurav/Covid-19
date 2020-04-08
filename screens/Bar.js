import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Bar = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name='md-menu' name='md-menu' color='black' size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default Bar;
