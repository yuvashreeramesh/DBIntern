import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {Text, View, Button} from 'react-native';
import CheckBox from 'react-native-check-box';
const App = () => {
  const[isChecked,setIsChecked]=useState(false);
  return (
    // <View style={{width:"100%",height:"100%"}}>
      
      <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
       setIsChecked(!isChecked);
     
    }}
    isChecked={isChecked}
     rightText={"CheckBox"}
/>
     
    // </View>
  );
};

export default App;
