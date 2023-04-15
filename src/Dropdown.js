/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
const App = () => {
  const [dropDown, setdropDown] = useState(false);
  const [value, setvalue] = useState('');
  const setStageValue = item => {
    setvalue(item.value);
    setdropDown(false);
  };
  return (
    <DropDownPicker
      listMode="SCROLLVIEW"
      open={dropDown}
      value={value}
      items={[
        {label: 'india', value: 'INDIA'},
        {label: 'japan', value: 'JAPAN'},
        {label: 'usa', value: 'USA'},
      ]}
      onPress={() => {
        setdropDown(!dropDown);
      }}
      onSelectItem={setStageValue}
      dropDownContainerStyle={{
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white',
        elevation: 1,
        
      }}
      style={{
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor: 'red',
        height: 50,
        
      }}
      dropDownDirection="BOTTOM"
    />
  );
};

export default App;
