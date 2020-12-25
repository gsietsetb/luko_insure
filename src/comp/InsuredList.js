/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image} from 'react-native';

import C, {apply} from 'consistencss';
import {bgColor, colors, deviceHeight, emptyStateURL} from '../gStyles';
import InsuredItem from './InsuredCard';

export default () => {
  /**Completed tasks selector sorted by date*/
  /* const completed = Object.values(state.todoMap)
     .filter((item) => !!item.completed_at)
     .sort((a, b) => b.created_at - a.created_at);

   /!**Uncompleted tasks selector sorted by decreasing date*!/
   const uncompleted = Object.values(state.todoMap)
     .filter((item) => !item.completed_at)
     .sort((a, b) => a.created_at - b.created_at);

   useEffect(() => fetchTodos(), []);*/
  const [pending, setPending] = useState('');
  const insuredItems = ['Cartier Ring', 'Necklace', 'Radius', 'Analog digital']; //RootStore.items;

  return pending ? (
    <ActivityIndicator color={colors.blueyGrey} />
  ) : (
    <FlatList
      data={insuredItems}
      numColumns={2}
      style={apply(
        {maxHeight: deviceHeight * 0.8},
        bgColor(colors.paleGreyTwo),
        C.my4,
        C.p2,
      )}
      ListEmptyComponent={
        <Image
          source={{uri: emptyStateURL}}
          resizeMode={'contain'}
          style={apply(C.h80)}
        />
      }
      /*onRefresh={() => fetchTodos()}*/
      refreshing={pending}
      renderItem={(item) => <InsuredItem {...item} />}
    />
  );
};
