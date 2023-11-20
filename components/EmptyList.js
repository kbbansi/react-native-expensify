import {View, Text, Image} from 'react-native';
function EmptyList({message}) {
  return (
    <View className="flex-1 justify-center items-center my-5 space-y-4">
      <Image
        className="w-36 h-36 shadow"
        source={require('../assets/images/empty.png')}
      />
      <Text className="font-bold text-gray-400">
        {message || 'No trips yet'}
      </Text>
    </View>
  );
}

export default EmptyList;
