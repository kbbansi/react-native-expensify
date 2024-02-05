import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import BackButton from '../components/BackButton';
import {colours} from '../theme';
import {categories} from '../constants';

function AddExpenseScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleAddExpense = () => {
    if (title && amount && category) {
      console.log(title, amount);
      navigation.goBack();
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
              <BackButton onClick={() => navigation.goBack()} />
            </View>
            <Text
              className={`${colours.heading} font-bold text-xl text-center`}>
              Add Expense
            </Text>
          </View>
          {/*We will sleep here*/}
          <View className="flex-row justify-center my-3 mt-5">
            {/*Banner Image*/}
            <Image
              source={require('../assets/images/expenseBanner.png')}
              className="w-72 h-72"
            />
          </View>
          {/*  Inputs to add a trip*/}
          <View className="space-y-2 mx-2">
            <Text className={`${colours.heading} font-bold text-lg`}>
              Expense Title
            </Text>
            <TextInput
              value={title}
              onChangeText={value => setTitle(value)}
              className="p-4 bg-white rounded-full mb-3"
              placeholder="Enter Location"
            />
            <Text className={`${colours.heading} font-bold text-lg`}>
              Price
            </Text>
            <TextInput
              value={amount}
              onChangeText={value => setAmount(value)}
              className="p-4 bg-white rounded-full mb-3"
              placeholder="Enter Country"
            />
          </View>
          <View className="mx-2 space-x-2">
            <Text className="text-lg font-bold">Category</Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map(cat => {
                let bgColor = 'bg-white';
                if (cat.value === category) {
                  bgColor = 'bg-green-200';
                }
                return (
                  <TouchableOpacity
                    onPress={() => setCategory(cat.value)}
                    key={cat.value}
                    className={`rounded-full ${bgColor} px-4 p3 mb-2 mr-2`}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => handleAddExpense()}
              style={{backgroundColor: colours.button}}
              className="my-6 rounded-full p-3 shadow mx-2">
              <Text className="text-center text-white text-lg font-bold">
                Add Expense
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default AddExpenseScreen;
