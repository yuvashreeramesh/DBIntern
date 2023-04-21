import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CarList = () => {

    return (
      <View style={{flex :1, backgroundColor:'red'}}>
        {/* Header */}
        <View style={{width : '100%' , height : '8%', backgroundColor : 'green', justifyContent : 'center'}}>
<Text style={{marginLeft : '2.5%', fontFamily : 'OpenSans-Bold', fontSize : 20}}>Favoured</Text>
        </View>
        {/* body */}
        <View style={{flex : 1, backgroundColor : 'pink'}}>

        </View>
      </View>
    );
 
}

export default CarList;
