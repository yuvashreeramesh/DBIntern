/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Image} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // dropdown functions
  const [dropDown, setdropDown] = useState(false);
  const [value, setvalue] = useState('1');
  const setStageValue = item => {
    setvalue(item.value);
    setdropDown(false);
  };

  // checkbox functions
  
  
  const [ratePush,setRatePush]=useState(false);
  const [rateSMS,setRateSMS]=useState(false);
  const [ratewhatsApp,setRateWhatsApp]=useState(false);
  const [targetPush,setTargetPush]=useState(false);
  const [targetSMS,setTargetSMS]=useState(false);
  const [targetwhatsApp,setTargetWhatsApp]=useState(false);
  const [offerPush,setOfferPush]=useState(false);
  const [offerSMS,setOfferSMS]=useState(false);
  const [offerwhatsApp,setOfferWhatsApp]=useState(false);
  const [TransactionPush,setTransactionPush]=useState(false);
  const [TransactionSMS,setTransactionSMS]=useState(false);
  const [TransactionwhatsApp,setTransactionWhatsApp]=useState(false);
  const [schemePush,setSchemePush]=useState(false);
  const [schemeSMS,setSchemeSMS]=useState(false);
  const [schemewhatsApp,setSchemeWhatsApp]=useState(false);




  
  // switch

  const [rateSwitch, setRateSwitch] = useState(false);
  const [targetSwitch, setTargetSwitch] = useState(false);
  const [offerSwitch, setOfferSwitch] = useState(false);
  const [transactionSwitch, setTranscationSwitch] = useState(false);
  const [schemeSwitch, setSchemeSwitch] = useState(false);
  


  const toggleSwitch = (value) => {
   if (value=="rate")
   {setRateSwitch (previousState => !previousState);}
   if (value=="target")
   {setTargetSwitch (previousState => !previousState);}
   if (value=="offer")
   {setOfferSwitch (previousState => !previousState);}
   if (value=="transaction")
   {setTranscationSwitch (previousState => !previousState);}
   if (value=="scheme")
   {setSchemeSwitch (previousState => !previousState);}
  };

  return (
   <ScrollView>
    <View style={{flex: 1,backgroundColor:"white"}}>
      {/* header */}
      <View style={{flex: 1, width: '100%'}}>
        <LinearGradient
          colors={['#ffd05c', '#ffb960']}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Image
              source={require('./src/left-arrow.png')}
              style={{width: 10, height: 10, marginLeft: 30}}
            />
          </View>
          <View style={{flex: 3, marginLeft: 30,padding:25}}>
            <Text style={{fontWeight: 'bold'}}>Notification Setting</Text>
          </View>
        </LinearGradient>
      </View>

      {/* rate summary */}

    
      <View style={{flex: 1, width: '100%', paddingHorizontal: 25,marginVertical:20}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{}}>
            <Text style={{color: '#ffd05c', fontWeight: 'bold', fontSize: 15}}>
              Rate Summary
            </Text>
          </View>
          {/* dropdowm */}
          <View
            style={{
              // flex: 1,
              marginLeft: 50,
              // backgroundColor: 'black',
            }}>
            <DropDownPicker
              listMode="SCROLLVIEW"
              open={dropDown}
              value={value}
              items={[
                {label: 'Daily', value: '1'},
                {label: 'Weekly', value: '2'},
                {label: 'Monthly', value: '3'},
                {label: 'yearly', value: '4'},
              ]}
              onPress={() => {
                setdropDown(!dropDown);
              }}
              onSelectItem={setStageValue}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: '#f1f6f2',
                backgroundColor: 'white',
                elevation: 1,
                width:140,marginLeft:10
              }}
              style={{
                borderColor: '#f1f6f2',
                borderWidth: 1,
                backgroundColor: 'white',
                width: 140,
                marginLeft: 10,
              }}
              dropDownDirection="BOTTOM"
            />
          </View>
          {/* switch */}
          <View style={{}}>
            <Switch
              
              
              trackColor={{false: 'white', true: '#ff9e19'}}
              thumbColor={rateSwitch ? 'white' : 'white'}
              onValueChange= {()=>{toggleSwitch("rate")}}
              value={rateSwitch}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginVertical:20}}>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
              onClick={() => {
                setRatePush(!ratePush);
              }}
              isChecked={ratePush}
              rightText={'Push'}
        
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              
              onClick={() => {
                setRateSMS(!rateSMS);
              }}
              onPress={()=>{}}
              isChecked={rateSMS}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
              rightText={'SMS'}
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setRateWhatsApp(!ratewhatsApp);
              }}
              isChecked={ratewhatsApp}
              rightText={'whatsApp'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
        </View>

        
      </View>


{/* target */}


      <View style={{flex:1,paddingHorizontal:25,marginVertical:20}}>
        <View style={{flex:1,alignItems:"center",justifyContent:'center',flexDirection:"row"}}>
           <View style={{}}><Text style={{fontWeight:"bold",fontSize:15,color:"black"}}>Target & Milestone</Text></View>
           <View style={{flex:1}}>
           <Switch
              style={{}}
              trackColor={{false: 'white', true: '#ff9e19'}}
              thumbColor={targetSwitch ? 'white' : 'white'}
              onValueChange= {()=>{toggleSwitch("target")}}
              value={targetSwitch}
            />
           </View>
        </View>

        <View style={{flex:1,flexDirection:"row",marginVertical:20}}>
        <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setTargetPush(!targetPush)
              }}
              isChecked={targetPush}
              rightText={'Push'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setTargetSMS(!targetSMS)
              }}
              isChecked={targetSMS}
              rightText={'SMS'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setTargetWhatsApp(!setTargetWhatsApp)
              }}
              isChecked={targetwhatsApp}
              rightText={'whatsApp'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
        </View>
         
      </View>


      {/* offers */}

      <View style={{flex:1,paddingHorizontal:25,marginVertical:20}}>
        <View style={{flex:1,alignItems:"center",justifyContent:'center',flexDirection:"row"}}>
           <View style={{}}><Text style={{fontWeight:"bold",fontSize:15,color:"black"}}>Offers & Events</Text></View>
           <View style={{flex:1}}>
           <Switch
              style={{}}
              trackColor={{false: 'white', true: '#ff9e19'}}
              thumbColor={offerSwitch ? 'white' : 'white'}
              onValueChange= {()=>{toggleSwitch("offer")}}
              value={offerSwitch}
            />
           </View>
        </View>

        <View style={{flex:1,flexDirection:"row",marginVertical:20}}>
        <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setOfferPush(!offerPush);
              }}
              isChecked={offerPush}
              rightText={'Push'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setOfferSMS(!offerSMS)
              }}
              isChecked={offerSMS}
              rightText={'SMS'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setOfferWhatsApp(!offerwhatsApp)
              }}
              isChecked={offerwhatsApp}
              rightText={'whatsApp'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
        </View>
         
      </View>


      {/* Transaction */}


      <View style={{flex:1,paddingHorizontal:25,marginVertical:20}}>
        <View style={{flex:1,alignItems:"center",justifyContent:'center',flexDirection:"row"}}>
           <View style={{}}><Text style={{fontWeight:"bold",fontSize:15,color:"black"}}>Transaction Reminder</Text></View>
           <View style={{flex:1}}>
           <Switch
              style={{}}
              trackColor={{false: 'white', true: '#ff9e19'}}
              thumbColor={transactionSwitch ? 'white' : 'white'}
              onValueChange= {()=>{toggleSwitch("transaction")}}
              value={transactionSwitch}
            />
           </View>
        </View>

        <View style={{flex:1,flexDirection:"row",marginVertical:20}}>
        <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setTransactionPush(!TransactionPush)
              }}
              isChecked={TransactionPush}
              rightText={'Push'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1,}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setTransactionSMS(!TransactionSMS)
              }}
              isChecked={TransactionSMS}
              rightText={'SMS'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setTransactionWhatsApp(!TransactionwhatsApp)
              }}
              isChecked={TransactionwhatsApp}
              rightText={'whatsApp'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
        </View>
         
      </View>


      {/* scheme Maturity */}

      <View style={{flex:1,paddingHorizontal:25,marginVertical:20}}>
        <View style={{flex:1,alignItems:"center",justifyContent:'center',flexDirection:"row"}}>
           <View style={{}}><Text style={{fontWeight:"bold",fontSize:15,color:"black"}}>Scheme Maturity Alert</Text></View>
           <View style={{flex:1}}>
           <Switch
              style={{}}
              trackColor={{false: 'white', true: '#ff9e19'}}
              thumbColor={schemeSwitch ? 'white' : 'white'}
              onValueChange= {()=>{toggleSwitch("scheme")}}
              value={schemeSwitch}
            />
           </View>
        </View>

        <View style={{flex:1,flexDirection:"row",marginVertical:20}}>
        <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setSchemePush(!schemePush)
              }}
              isChecked={schemePush}
              rightText={'Push'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setSchemeSMS(schemeSMS)
              }}
              isChecked={schemeSMS}
              rightText={'SMS'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
               setSchemeWhatsApp(!schemewhatsApp)
              }}
              isChecked={schemewhatsApp}
              rightText={'whatsApp'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
        </View>
        <View style={{flex:1}}>
          <View style={{width:"100%",height:"2%",Colors:"grey",backgroundColor:"black"}}></View></View> 
      </View>


{/* rewards */}

      <View style={{flex:1,paddingHorizontal:25,marginVertical:20}}>
        <View style={{flex:1,alignItems:"center",justifyContent:'center',flexDirection:"row"}}>
           <View style={{}}><Text style={{fontWeight:"bold",fontSize:15,color:"black"}}>Rewards Notification</Text></View>
           <View style={{flex:1}}>
           <Switch
              style={{}}
              trackColor={{false: 'white', true: '#ff9e19'}}
              thumbColor={rateSwitch ? 'white' : 'white'}
              onValueChange= {()=>{toggleSwitch("rate")}}
              value={rateSwitch}
            />
           </View>
        </View>

        <View style={{flex:1,flexDirection:"row",marginVertical:20}}>
        <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setRatePush(!ratePush)
              }}
              isChecked={ratePush}
              rightText={'Push'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setRatePush(!ratePush)
              }}
              isChecked={ratePush}
             
              rightText={'SMS'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
          <View style={{flex: 1}}>
            <CheckBox
              style={{}}
              onClick={() => {
                setRatePush(!ratePush)
              }}
              isChecked={ratePush}
              rightText={'whatsApp'}
              checkedCheckBoxColor='#ff9e19'
              checkBoxColor='#eaeaea'
            />
          </View>
        </View>
         
      </View>
      
    </View>
    </ScrollView>   
  );
};

export default App;
