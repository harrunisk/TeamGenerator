import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';


const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
}, {
  // for smoothing
  headerMode: 'screen',
});

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});
//  header null navigation bar ekranda görünmesin ama yönlendirme yapsın diye yazılmış.
//  mode modal kısmında sağdan gelmesi yerine aşağıdan yukarı geliyor
export default StackNavigator({
  Home: {
    screen: HomeStack,
  },
  CurrencyList: {
    screen: CurrencyListStack,
  },
},
{
  mode: 'modal',
  cardStyle: { paddingTop: StatusBar.currentHeight },
  headerMode: 'none',
});
