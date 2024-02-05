import {View, Text} from 'react-native';
import {categoryBG, colours} from '../theme';
function ExpenseCard({item}) {
  return (
    <View
      style={{backgroundColor: categoryBG[item.category]}}
      className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl">
      <View>
        <Text className={`${colours.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colours.heading} text-xs`}>{item.category}</Text>
      </View>
      <View>
        <Text>{item.amount}</Text>
      </View>
    </View>
  );
}

export default ExpenseCard;
