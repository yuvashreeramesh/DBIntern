/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState } from 'react';
import { Switch} from 'react-native';

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



const App=()=>{
  const[isEnabled,setIsEnabled]=useState(false);
  
  const toggleSwitch=()=>{
    setIsEnabled(previousState=>!previousState)
  }
  return(
      <View style={{flex:1 ,width:"100%",}}>
        <Text >switch</Text>
        <Switch
           trackColor={{false:"grey",true:"grey"}}
           thumbColor={isEnabled ? "black" :"black"}
           onValueChange={toggleSwitch}
           value={isEnabled}/>
      </View>
  );
}


export default App;
