import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import ScreenWrapper from '../components/ScreenWrapper';
import {colours} from '../theme';
import BackButton from '../components/BackButton';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
function AddTripScreen() {
  const navigation = useNavigation();
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const handleAddTrip = () => {
    if (place && country) {
      console.log(place, country);
      navigation.navigate('Home');
    } else {
      console.log('Error: All fields are required');
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            {/*Back Button and Heading*/}
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text
              className={`${colours.heading} font-bold text-xl text-center`}>
              Add Trip
            </Text>
          </View>
          {/*We will sleep here*/}
          <View className="flex-row justify-center my-3 mt-5">
            {/*Banner Image*/}
            <Image
              source={require('../assets/images/4.png')}
              className="w-72 h-72"
            />
          </View>
          {/*  Inputs to add a trip*/}
          <View className="space-y-2 mx-2">
            <Text className={`${colours.heading} font-bold text-lg`}>
              Where On Earth?
            </Text>
            <TextInput
              value={place}
              onChangeText={value => setPlace(value)}
              className="p-4 bg-white rounded-full mb-3"
              placeholder="Enter Location"
            />
            <Text className={`${colours.heading} font-bold text-lg`}>
              Which Country
            </Text>
            <TextInput
              value={country}
              onChangeText={value => setCountry(value)}
              className="p-4 bg-white rounded-full mb-3"
              placeholder="Enter Country"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => handleAddTrip()}
              style={{backgroundColor: colours.button}}
              className="my-6 rounded-full p-3 shadow mx-2">
              <Text className="text-center text-white text-lg font-bold">
                Add Trip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default AddTripScreen;
