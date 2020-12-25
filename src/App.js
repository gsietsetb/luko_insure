/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import C, {apply, extend} from 'consistencss';
import {bgColor, colors, fonts, luko, textColor} from './gStyles';
import AddItem from './comp/AddItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import InsuredList from './comp/InsuredList';

LogBox.ignoreAllLogs();

extend({
  colors: {...colors},
});

const App: () => React$Node = () => {
  const [search, setSearch] = useState('');
  const insuredItems = [1, '224']; //RootStore.items;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {/**Header*/}
      <Image source={luko} resizeMode={'contain'} style={apply(C.h10, C.my4)} />
      {/**Add List*/}
      <AddItem />
      {/**Search*/}
      <View
        style={apply(C.row, C.radius2, bgColor(colors.paleGrey), C.p2, C.mx4)}>
        <Icon
          name={'search'}
          onPress={() => {}}
          size={20}
          style={apply(textColor(colors.blueyGrey))}
        />
        <TextInput
          onChangeText={(text) => setSearch(text)}
          value={search}
          style={apply(C.ml4, fonts.body1, textColor(colors.blueyGrey))}
          placeholderTextColor={colors.blueyGrey}
          placeholder={'Search ' + insuredItems?.length + ' items'}
        />
      </View>
      {/**Todos List content*/}
      <InsuredList />
      <View style={C.mb6} />
    </SafeAreaView>
  );
};
export default App;
