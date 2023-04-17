/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
var radio_props = [
  {label: 'sleeping', value: 0 },
  {label: 'eating', value: 1 },
  {label: 'hdgywu', value: 2 },
  {label: 'ehrfu', value: 3 }
];

const App=()=>{
    const[value,setValue]=useState(0)
    return (
      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {setValue(value);}}
        />
      </View>
    );
  
}


export default App;
