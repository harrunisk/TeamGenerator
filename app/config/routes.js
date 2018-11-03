import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import LeagueList from '../screens/LeagueList';


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

const LeagueListStack = StackNavigator({
  LeagueList: {
    screen: LeagueList,
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
  LeagueList: {
    screen: LeagueListStack,
  },
},
{
  mode: 'modal',
  cardStyle: { paddingTop: StatusBar.currentHeight },
  headerMode: 'none',
});
