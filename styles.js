import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    bigTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    adTitle: {
      fontSize: 20,  
      fontWeight: 'bold',
      marginBottom: 5,
    },

    smallButton: {
      fontSize: 20,  
      backgroundColor: 'black',
      marginBottom: 15,
      width: 100,
      alignContent: 'center',
      borderRadius: 8,
    },

    smallButtonText: {
        fontSize: 15,
        color: 'white',  
        alignSelf: 'center',
        fontWeight: 'bold'
      },
      adDescription: {
        fontSize: 15,
        marginBottom: 20,
    
    },
    centeredContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      verticalSpace: {
        marginVertical: 5,
      },
      
      input: {
        fontSize: 28, 
        height: 60,
        width: 200,   
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 10,
        paddingHorizontal: 10,
      },

      adContainer: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBlockColor: 'black',
        borderWidth: 3,
      },

      addbutton: {
        height: 60,
        width: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
      },

      addButtonOnAddScreen: {
        height: 60,
        width: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
      },

      addButtonOnAddScreenText: {
        fontSize: 20,
        color: 'white',  
        alignSelf: 'center',
        fontWeight: 'bold'


      }


  });