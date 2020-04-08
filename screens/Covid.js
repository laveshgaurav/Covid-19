import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Temp from './Temp';
import Faq from './Faq';
import Bar from './Bar';
import HelpLine from './HelpLine';
import About from './About';

export default class Covid extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   this.apiCall();
  // }
  // async apiCall() {
  //   let resp = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
  //   let respJson = await resp.json();
  //   console.log(respJson.data.summary.total);
  //   console.log(respJson.lastRefreshed);
  //   this.setState({
  //     total: respJson.data.summary.total,
  //     lastUpdate: respJson.lastRefreshed,
  //   });
  //   this.setState({ dataSource: respJson.data.regional });
  // }

  render() {
    const Drawer = createDrawerNavigator();

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Temp} />
          <Drawer.Screen name='FAQ' component={Faq} />
          <Drawer.Screen name='Helpline Numbers' component={HelpLine} />
          <Drawer.Screen name='About Developer' component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  table: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  texts: {
    fontSize: 12,
    textAlign: 'left',
    marginTop: 12,
    marginBottom: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#71B1DD',
    width: 120,
    height: 50,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
});
