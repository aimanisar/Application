/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useState } from 'react';
 //import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   Button,
   Alert,
 } 
 from 'react-native';
import Header from './Header';
  
 
 // const [submitted, SetSubmitted] =useState(false);
 //   const onPressHandler = () => {
 //     if (name.length > 3) {
 //       SetSubmitted(!submitted);
 //     }
 //     else{
 //       SetShowWarning(true);
 //       // Alert.alert('Warning', 'The text should be > than 3 char', [
 //       //   {text: 'OK'}, {text: 'Do no show again'}
 //       // ], {cancelable: true})
 //       // ToastAndroid.showWithGravityAndOffset ('Name should be blah', 
 //       //   ToastAndroid.LONG, 
 //       //   ToastAndroid.TOP,
 //       //   0,
 //       //   300
 //       // )
 //     }
 //  }
 
  const App = () => {
   const [name, setName] =useState(''); 
   const [submitted, SetSubmitted] =useState(false); 
 
 const onPressHandler = () => {
   if (name.length>3) {
     SetSubmitted(!submitted);
   }
   else{
     Alert.alert('Warning!', 'The name must be longer than 3 characters'
       ,[{text: 'OK'}],{cancelable:true}
     )
   
   }
 }
 
   return (
    <View style={styles.body}>
      {/* <Header/> */}
      <Text style={styles.text}>
        LOGIN 
       </Text>
       <TextInput 
         style={styles.input}
         placeholder= 'Name'
         maxLength={15}
         onChangeText={(value) => setName (value)}
       />
       <TextInput
         style={styles.input}
         placeholder= 'Password'
         maxLength={15}
         secureTextEntry
       />
       <Button
         title={submitted ? 'Clear' : 'Submit'}
         onPress={onPressHandler}
       //  color= ''
       />
       {
         submitted ?
           <Text>
             You are registered as {name}
           </Text>
           :
           null
       }
 
 
    </View>
   );
 };
 
 
 const styles = StyleSheet.create({
   body: {
     flex: 1,
     flexDirection: 'column',
     backgroundColor: 'white',
     alignItems: 'center',
     justifyContent: 'center',  
   },
 
   text: {
     color: 'black',
     fontSize: 20,
     margin: 10, 
     textAlign: 'center',
     fontWeight: 'bold',
   },
 
   input: {
     width:200,
     borderWidth: 1,
     borderColor: '#6495ED',
     margin: 15,
     borderRadius: 10,
   },
 
   image: {
     width:100,
     height: 100,
     margin:10,
   },  
 });
 
 export default App;




 