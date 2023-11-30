import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { commonStyles } from './styles';
import { deleteAd } from './redux/actions';

const HomeScreen = ({ navigation }) => {
  
  const dispatch = useDispatch();
  
  const ads = useSelector((state) => state.ads);

  const handleUpdateAd = (adId) => {
    navigation.navigate('UpdateAd', { adId });
  };

  const handleDeleteAd = (adId) => {
    dispatch(deleteAd(adId));
  };

  return (
    <View style={{ flex: 0.99 }}>
      <ScrollView
        contentContainerStyle={commonStyles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={commonStyles.adContainer}>
          <Text style={commonStyles.bigTitle}>Home Screen</Text>
          {ads.map((ad) => (
            <View key={ad.id} style={commonStyles.adContainer}>
              <Text style={commonStyles.adTitle}>{ad.title}</Text>
              <Text style={commonStyles.adDescription}>{ad.description}</Text>
              
              <TouchableOpacity
                onPress={() => handleUpdateAd(ad.id)}
                style={commonStyles.smallButton}
              >
                <Text style={commonStyles.smallButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteAd(ad.id)}
                style={commonStyles.smallButton}
              >
                <Text style={commonStyles.smallButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
     
      <View style={commonStyles.addbutton}>
      
      <TouchableOpacity
          onPress={() => navigation.navigate('AddAd')}
          style={{ ...commonStyles.addbutton}}
        >
          <Text style={commonStyles.smallButtonText}> ADD</Text>
        </TouchableOpacity>        
      </View>

       
    </View>
  );
};

export default HomeScreen;