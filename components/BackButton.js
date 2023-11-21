import {View, Text, TouchableOpacity} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {colours} from '../theme';
import {useNavigation} from '@react-navigation/native';
function BackButton(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('pressed');
        console.log(props);
        navigation.goBack();
      }}
      className="rounded-full h-8 w-8">
      <ChevronLeftIcon size="30" color={colours.button} />
    </TouchableOpacity>
  );
}

export default BackButton;
