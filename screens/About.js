import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Button,
} from 'react-native';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import image from '../assets/image.jpg';
// import { WebView } from 'react-native-webview';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{ position: 'absolute', left: '2%', top: 24 }}
      >
        <Ionicons name='md-menu' name='md-menu' color='#71B1DD' size={48} />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 32,
          //   flexDirection: 'column-reverse',
        }}
      >
        <Text style={{ fontWeight: 'bold', color: '#71B1DD', fontSize: 36 }}>
          ABOUT ME
        </Text>
        <Image
          source={image}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: 36,
          }}
        />
      </View>
      <Text style={{ color: '#71B1DD', fontSize: 18 }}>Lavesh Gaurav</Text>
      <View>
        <Text style={{ marginVertical: 8 }}>
          KIIT, Deemed to be university, Bhubaneswar
        </Text>
        <Text style={{ fontStyle: 'italic', marginVertical: 8 }}>
          B.Tech, Electronics & Telecommunications (2017-2021)
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/lavesh-gaurav-552728115/'
              )
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0e76a8',
              padding: 8,
              //   width: 80,
              flex: 1,
              margin: 8,
            }}
          >
            <FontAwesome name='linkedin' color='white' size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.instagram.com/lavesh_gaurav/')
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#D0006E',
              //   width: 80,
              flex: 1,
              margin: 8,
              padding: 8,
            }}
          >
            <FontAwesome name='instagram' color='white' size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/laveshgaurav')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#24292E',
              padding: 8,
              //   width: 80,
              flex: 1,
              margin: 8,
            }}
          >
            <FontAwesome name='github' color='white' size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.facebook.com/lavesh.gaurav')
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#3b5998',
              //   width: 80,
              flex: 1,
              margin: 8,
              padding: 8,
            }}
          >
            <FontAwesome name='facebook' color='white' size={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:lavesh.g96@gmail.com')}
          title='Contact Mail'
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DA4B3D',
            //   width: 80,
            // flex: 1,
            margin: 8,
            padding: 8,
          }}
        >
          <MaterialCommunityIcons name='gmail' color='white' size={24} />
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', bottom: '0%' }}>
        <Text>Version 1.0.0</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center',
  },
});

export default About;
