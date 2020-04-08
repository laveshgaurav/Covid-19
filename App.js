// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Button,
//   Alert,
//   ScrollView,
// } from 'react-native';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dataSource: [],
//       total: 0,
//       lastUpdate: '',
//     };
//   }
//   componentDidMount() {
//     this.apiCall();
//   }
//   async apiCall() {
//     let resp = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
//     let respJson = await resp.json();
//     console.log(respJson.data.summary.total);
//     console.log(respJson.lastRefreshed);
//     this.setState({
//       total: respJson.data.summary.total,
//       lastUpdate: respJson.lastRefreshed,
//     });
//     this.setState({ dataSource: respJson.data.regional });
//   }
//   render() {
//     let { dataSource, isLoading } = this.state;
//     return (
//       <View style={styles.container} horizontalfalse>
//         <View
//           style={{ margin: 16, alignItems: 'center', justifyContent: 'center' }}
//         >
//           <Text style={{ color: 'white', fontSize: 18 }}>
//             Total confirmed cases
//           </Text>
//           <Text style={{ color: 'white', fontSize: 72 }}>
//             {this.state.total}
//           </Text>
//           <Text style={{ color: 'white', fontSize: 12 }}>
//             Last update on {this.state.lastUpdate}
//           </Text>
//         </View>
//         <View style={{ margin: 8 }}>
//           <Button title='REFRESH' onPress={() => this.apiCall()} />
//         </View>

//         {/*table heading*/}

//         <ScrollView style={{ marginTop: 16, marginBottom1: 16 }}>
//           <View style={styles.table}>
//             <View style={{ flex: 1 }}>
//               <Text
//                 style={
//                   (styles.texts, { color: 'white', fontSize: 18, padding: 8 })
//                 }
//               >
//                 STATE
//               </Text>
//             </View>
//             <View
//               style={{
//                 flex: 2,
//                 flexDirection: 'row',
//                 justifyContent: 'space-around',
//                 alignItems: 'center',
//               }}
//             >
//               <Text
//                 style={
//                   (styles.texts, { color: 'blue', fontSize: 18, padding: 8 })
//                 }
//               >
//                 CASES
//               </Text>
//               <Text
//                 style={
//                   (styles.texts, { color: 'red', fontSize: 18, padding: 8 })
//                 }
//               >
//                 DEATHS
//               </Text>
//               <Text
//                 style={
//                   (styles.texts, { color: 'green', fontSize: 18, padding: 8 })
//                 }
//               >
//                 RECOVERED
//               </Text>
//             </View>
//           </View>
//           <View>
//             <FlatList
//               data={this.state.dataSource}
//               renderItem={({ item }) => (
//                 <View style={styles.table}>
//                   <View style={{ flex: 1 }}>
//                     <Text style={styles.texts}>{item.loc}</Text>
//                   </View>
//                   <View
//                     style={{
//                       flex: 2,
//                       flexDirection: 'row',
//                       justifyContent: 'space-around',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Text style={styles.texts}>
//                       {item.confirmedCasesIndian}
//                     </Text>
//                     <Text style={styles.texts}>{item.deaths}</Text>
//                     <Text style={styles.texts}>{item.discharged}</Text>
//                   </View>
//                 </View>
//               )}
//               // keyExtractor={(item) => item.loc}
//             />
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     // alignItems: 'center',
//     // justifyContent: 'space-around',
//   },
//   table: {
//     flexDirection: 'row',
//     // justifyContent: 'space-around',
//   },
//   texts: {
//     fontSize: 12,
//     textAlign: 'left',
//     marginTop: 12,
//     marginBottom: 12,
//     color: 'white',
//   },
// });

// import React from 'react';
// import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import image from './assets/stayHome.png';
// import virus from './assets/virus.png';
// import Temp from './screens/Temp';
// import Raw from './screens/Raw'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <Text style={{ fontSize: 40, color: '#71B1DD' }}>
//           C<Image source={virus} style={{ width: 40, height: 40 }} />
//           VID-19
//         </Text>
//       </View>

//       <Image source={image} style={{ width: '100%', height: '40%' }} />
//       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#676767' }}>
//           Stay <Text style={{ color: '#71B1DD' }}>Home !</Text>
//         </Text>
//         <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#676767' }}>
//           Stay <Text style={{ color: '#71B1DD' }}>Safe !</Text>
//         </Text>
//         <Temp></Temp>
//       </View>
//       <TouchableOpacity style={styles.button}>
//         <Text style={{ fontSize: 18, color: 'white' }}>KNOW MORE</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#71B1DD',
//     width: 280,
//     height: 60,
//     alignItems: 'center',
//     borderRadius: 30,
//     justifyContent: 'center',
//     // padding: 10,
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
// });

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import image from './assets/stayHome.png';
import virus from './assets/virus.png';
import Home from './screens/Home';
import Covid from './screens/Covid';
import Temp from './screens/Temp';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      component: <Home clicked={() => this.onChange()} />,
    };
  }
  onChange() {
    this.setState({
      component: <Covid clicked2={() => this.onBack()} />,
    });
  }
  onBack() {
    this.setState({
      component: <Home clicked={() => this.onChange()} />,
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.component}
        <View style={{ alignItems: 'center', marginBottom: 24 }}></View>
      </View>
    );
  }
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
});
