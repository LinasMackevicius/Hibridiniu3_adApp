import React, { useState, useEffect } from 'react';

import { View, Text, FlatList, StyleSheet, Pressable,  SafeAreaView, TextInput, Button, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RNFS from 'react-native-fs';

var filePath = RNFS.DocumentDirectoryPath + './assets/data.json';

function AddAnAdScreen({ route, navigation }) {

  const fruit = {
    fruit: "dragon fruit",
    size: "big",
    color: "red"
  };

  const readAndAppendFile = async () => {
    try {
      const existingData = await RNFS.readFile(filePath);
  
      const existingJson = JSON.parse(existingData);
  
      // Append the new data to the existing JSON object
      existingJson.push(fruit);
  
      // Convert the updated data to a JSON string
      const updatedJsonString = JSON.stringify(existingJson);
  
      // Write the updated JSON data back to the file
      await RNFS.writeFile(filePath, updatedJsonString, 'utf8');
      
      // Show an alert indicating that the file has been saved
      Alert.alert('File saved', null, [{ text: 'OK' }]);
    } catch (e) {
      console.log('Error:', e);
    }
  };

  const [text, onChangeText] = React.useState('Useless Text');
  
  return(
    <SafeAreaView>
      <TextInput
        style={styles.inputBox}
        onChangeText={onChangeText}
        value={text}
      />

      <Button title="Press Me" onPress={readAndAppendFile}/>

    </SafeAreaView>
  );
}


function MainScrollAddsScreen({ route, navigation }) {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Importing local JSON file using require
    const data = require('./assets/data.json');
    setJsonData(data);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.adStyle}>
      <Text style={styles.adText}>{item.fruit}</Text>
      <Text style={styles.adText}>{item.size}</Text>
      <Text style={styles.adText}>{item.color}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jsonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.fruit}
      />

      <Pressable
        style={styles.menuButton}
        onPress={() => {
          navigation.navigate('AddOneAdScreen');
        }}
      >
        <Text style={styles.buttonText}> + </Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main" component={MainScrollAddsScreen} />
        <Stack.Screen name="AddOneAdScreen" component={AddAnAdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
  },
  menuButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  adStyle: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 8,
    alignContent: 'flex-end'
  },

  adText: {
    fontSize: 18,
    marginBottom: 8,
  },

  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
