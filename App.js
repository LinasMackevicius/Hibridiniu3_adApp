
import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, StyleSheet, StatusBar, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SecondScreen({route, navigation}) {
  <View>
      <Text> Second screen</Text>

  </View>
}


function HomeScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'left'}}>

      <Button
      title='goto second screen'
      onPress= {() => {navigation.navigate('Second')}} 
      />
     
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />

        <Stack.Screen
        name="Second"
        component= {SecondScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;