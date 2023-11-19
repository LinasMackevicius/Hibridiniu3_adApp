import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable,  SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function AddAnAdScreen({ route, navigation }) {

  
  const [text, onChangeText] = React.useState('Useless Text');

  return(
    <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />
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
    alignItems: 'center',
    justifyContent: 'center',
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
    borderWidth: 2,
    borderRadius: 8,
  },

  adText: {
    fontSize: 18,
    marginBottom: 8,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
