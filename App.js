import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

const navigator = createStackNavigator(
  {
    // SCREENS TO BE USED DURING THE PROJECT
    Welcome: WelcomeScreen,
    Signup: SignupScreen,
    Login: LoginScreen
  },
  
  {
    initialRouteName: 'Welcome',

    defaultNavigationOptions: {
      title: 'DreemWare',
    },
  }
);

export default createAppContainer(navigator);
