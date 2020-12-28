/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, TextInput, View} from 'react-native';

import C, {apply} from 'consistencss';
import {bgColor, colors, deviceHeight, emptyStateURL, fonts, textColor} from '../gStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {inject, observer} from 'mobx-react';

import emojiList from '../assets/fullEmoji.json';

const randomEmoji = () => Object.values(emojiList['Animals & Nature']);

export default inject('inventory')(
  observer(({inventory}) => {
    const [search, setSearch] = useState('');

    return (
      <View>
        {/**Search*/}
        <View style={apply(C.row, C.radius2, bgColor(colors.paleGrey), C.p2, C.mx4)}>
          <Icon name={'search'} onPress={() => {}} size={20} style={apply(textColor(colors.blueyGrey))} />
          <TextInput
            onChangeText={(text) => setSearch(text)}
            value={search}
            style={apply(C.ml4, fonts.body1, textColor(colors.blueyGrey))}
            placeholderTextColor={colors.blueyGrey}
            placeholder={'Search ' + inventory?.objects?.length + ' items'}
          />
        </View>

        {inventory.isLoading ? (
          <ActivityIndicator color={colors.blueyGrey} />
        ) : (
          <FlatList
            data={Object.values(emojiList['Animals & Nature'])}
            keyExtractor={(item, index) => index}
            numColumns={12}
            style={apply({maxHeight: deviceHeight * 0.8}, bgColor(colors.paleGreyTwo), C.my4, C.p2)}
            ListEmptyComponent={<Image source={{uri: emptyStateURL}} resizeMode={'contain'} style={apply(C.h80)} />}
            refreshing={inventory.isLoading}
            renderItem={({item}) => (
              <View>
                <Text style={C.font6}>{item.emoji}</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }),
);
