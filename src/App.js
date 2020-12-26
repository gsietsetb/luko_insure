/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {extend} from 'consistencss';
import {colors} from './gStyles';
import Inventory from './screens/Inventory';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RootStore} from './store';
import {Provider} from 'mobx-react';

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
    badge: 3 /*Todo add real number of items*/,
  },
  {name: 'Profile', icon: 'user'},
];
const inventory = RootStore.create({objects: [{}], showModal: false}, {});
const App: () => React$Node = () => (
  <Provider inventory={inventory}>
    <NavigationContainer>
      <Tab.Navigator
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
