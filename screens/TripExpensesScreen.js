import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';
import {colours} from '../theme';
import EmptyList from '../components/EmptyList';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';

const list_of_expenses = [
  {
    id: 1,
    title: 'Dinner Date with Jenny',
    amount: 100,
    category: 'Food',
  },
  {
    id: 2,
    title: 'Learner Driver License',
    amount: 150,
    category: 'Utility',
  },
  {
    id: 3,
    title: 'Internet Bill',
    amount: 400,
    category: 'Utility',
  },
  {
    id: 4,
    title: 'Water Bill',
    amount: 100,
    category: 'Utility',
  },
];

function TripExpensesScreen(props) {
  const {place, country} = props.route.params;

  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          {/*Back Button and Heading*/}
          <View className="absolute top-2 left-0 z-10">
            <BackButton onClick={() => navigation.goBack()} />
          </View>
          <View>
            <Text
              className={`${colours.heading} font-bold text-xl text-center`}>
              {place}
            </Text>

            <Text className={`${colours.heading} text-xs text-center`}>
              {country}
            </Text>
          </View>
        </View>
        {/* TODO: Add banner*/}
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require('../assets/images/7.png')}
            className="w-80 h-80"
          />
        </View>
        {/* TODO: Add recent trips*/}
        <View className="space-y-4">
          <View className="flex-row justify-between items-center">
            <Text className={`${colours.heading} font-bold text-xl`}>
              Expenses
            </Text>
            {/* TODO: TouchableOpacity takes text and makes it function like a button*/}
            <TouchableOpacity
              onPress={() => navigation.navigate('AddExpense')}
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className={colours.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 430}}>
            <FlatList
              data={list_of_expenses}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <EmptyList message={'No Expenses Recorded Yet'} />
              }
              className="mx-1"
              renderItem={({item}) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default TripExpensesScreen;
