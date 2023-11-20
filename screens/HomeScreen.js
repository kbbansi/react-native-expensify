import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import {colours} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from "../components/EmptyList";
import { useNavigation } from "@react-navigation/native";

const list_of_trips = [
  {
    id: 1,
    place: 'New York',
    country: 'USA',
  },
  {
    id: 2,
    place: 'Nzulezu',
    country: 'Ghana',
  },
  {
    id: 3,
    place: 'Meet me There',
    country: 'Ghana',
  },
  {
    id: 4,
    place: 'Helsinki',
    country: 'Finland',
  },
  {
    id: 5,
    place: 'Bay Town',
    country: 'Bahamas',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colours.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colours.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* TODO: Add banner*/}
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      {/* TODO: Add recent trips*/}
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
          <Text className={`${colours.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          {/* TODO: TouchableOpacity takes text and makes it function like a button*/}
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTrip')}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colours.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={list_of_trips}
            numColumns={2}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList message={'No trips yet'} />}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            className="mx-1"
            renderItem={({item}) => {
              return (
                <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colours.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colours.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
