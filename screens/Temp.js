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
export default class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      total: 0,
      lastUpdate: '',
    };
  }
  componentDidMount() {
    this.apiCall();
  }
  async apiCall() {
    let resp = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    let respJson = await resp.json();
    console.log(respJson.data.summary.total);
    console.log(respJson.lastRefreshed);
    this.setState({
      total: respJson.data.summary.total,
      lastUpdate: respJson.lastRefreshed,
    });
    this.setState({ dataSource: respJson.data.regional });
  }

  render() {
    return (
      <View style={styles.container} horizontalfalse>
        <TouchableOpacity
          onPress={this.props.navigation.toggleDrawer}
          style={{ position: 'absolute', left: '2%', top: 24 }}
        >
          <Ionicons name='md-menu' name='md-menu' color='#71B1DD' size={48} />
        </TouchableOpacity>
        <View
          style={{
            margin: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 24, marginTop: 18 }}>
            Total confirmed cases
          </Text>
          <Text style={{ fontSize: 72, color: '#71B1DD' }}>
            {this.state.total}
          </Text>
          <Text style={{ fontSize: 12 }}>
            Last update on{' '}
            <Text style={{ color: '#71B1DD' }}>{this.state.lastUpdate}</Text>
          </Text>
        </View>
        <View
          style={{
            margin: 8,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {/*<TouchableOpacity
            onPress={() => this.props.clicked2()}
            // style={{ padding: 12, backgroundColor: 'blue' }}
            style={styles.button}
          >
            <Ionicons name='ios-backspace' size={32} color='white' />
          </TouchableOpacity>*/}

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Alert.alert('Data Refreshed', 'You have got the latest data', [
                {
                  onPress: () => this.apiCall(),
                },
              ])
            }
          >
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                padding: 6,
              }}
            >
              Refresh
            </Text>
            <Ionicons name='ios-refresh-circle' size={32} color='white' />
          </TouchableOpacity>
        </View>

        {/*table heading*/}

        <ScrollView style={{ marginTop: 16, marginBottom1: 24 }}>
          <View style={styles.table}>
            <View style={{ flex: 1 }}>
              <Text style={(styles.texts, { fontSize: 18, padding: 8 })}>
                STATE
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Text
                style={
                  (styles.texts, { color: 'blue', fontSize: 18, padding: 8 })
                }
              >
                CASES
              </Text>
              <Text
                style={
                  (styles.texts, { color: 'red', fontSize: 18, padding: 8 })
                }
              >
                DEATHS
              </Text>
              <Text
                style={
                  (styles.texts, { color: 'green', fontSize: 18, padding: 8 })
                }
              >
                RECOVERED
              </Text>
            </View>
          </View>
          <View>
            <FlatList
              style={{ padding: 8 }}
              data={this.state.dataSource}
              renderItem={({ item }) => (
                <View style={styles.table}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.texts}>{item.loc}</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={styles.texts}>
                      {item.confirmedCasesIndian}
                    </Text>
                    <Text style={styles.texts}>{item.deaths}</Text>
                    <Text style={styles.texts}>{item.discharged}</Text>
                  </View>
                </View>
              )}
              // keyExtractor={(item) => item.index}
              // key={(item) => item.index}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    color: 'white',
  },
});
