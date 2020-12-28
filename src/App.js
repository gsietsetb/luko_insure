/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {AsyncStorage, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {extend} from 'consistencss';
import {colors} from './gStyles';
import Inventory from './screens/Inventory';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RootStore} from './store';
import {Provider} from 'mobx-react';
import {persist} from 'mst-persist';

LogBox.ignoreAllLogs();

extend({
  colors: {...colors},
});

const Tab = createBottomTabNavigator();
const screens = [
  {name: 'Protection', icon: 'home'},
  {name: 'Insurance', icon: 'umbrella'},
  {
    name: 'Inventory',
    icon: 'gem',
    badge: inventory?.objects?.length,
  },
  {name: 'Profile', icon: 'user'},
];
const inventory = RootStore.create({
  objects: [],
  currentIndex: 0,
  nextIndex: 0,
  showModal: false,
  isLoading: false,
});

persist('inventory', inventory, {
  storage: AsyncStorage,
}).then(() => console.log('someStore has been hydrated'));

const App: () => React$Node = () => (
  <Provider inventory={inventory}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={screens[2].name}
        tabBarOptions={{
          activeTintColor: colors.blue,
          inactiveTintColor: colors.blueyGrey,
        }}>
        {screens.map(({name, icon, badge}) => (
          <Tab.Screen
            name={name}
            options={{
              tabBarLabel: name,
              tabBarBadge: badge,
              tabBarIcon: (props) => <Icon {...props} size={20} name={icon} />,
            }}
            component={Inventory}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);
export default App;
