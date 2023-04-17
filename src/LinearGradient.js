/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';
const App=()=>{
  return(
      <View style={{flex:1}}>
      <LinearGradient
        colors={["#741b47","#c27ba0","#ead1dc" ]}
        style={{width:"50%",height:"30%",margin:50,alignItems:"center",justifyContent:"center"
       ,fontSize:20}}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text>Horizontal Gradient</Text>
      </LinearGradient>
      </View>
  );
}


export default App;
