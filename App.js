import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './screens/WelcomeScreen';

const navigator = createStackNavigator(
  {
    // SCREENS TO BE USED DURING THE PROJECT
    Welcome: WelcomeScreen
  },
  
  {
    initialRouteName: 'Welcome',

    defaultNavigationOptions: {
      title: 'LapShop',
    },
  }
);

export default createAppContainer(navigator);
