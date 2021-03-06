import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings204270Navigator from '../features/Settings204270/navigator';
import UserProfile204263Navigator from '../features/UserProfile204263/navigator';
import Settings204262Navigator from '../features/Settings204262/navigator';
import Settings204260Navigator from '../features/Settings204260/navigator';
import SignIn2204258Navigator from '../features/SignIn2204258/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings204270: { screen: Settings204270Navigator },
UserProfile204263: { screen: UserProfile204263Navigator },
Settings204262: { screen: Settings204262Navigator },
Settings204260: { screen: Settings204260Navigator },
SignIn2204258: { screen: SignIn2204258Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
