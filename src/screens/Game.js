import {Image, SafeAreaView, StatusBar} from 'react-native';
import {luko} from '../gStyles';
import C, {apply} from 'consistencss';
import React from 'react';
import {inject, observer} from 'mobx-react';
import emojiList from '../assets/fullEmoji.json';
import EmojiList from '../comp/EmojiList';

const randomEmoji = () => Object.values(emojiList['Animals & Nature']);

export default inject('inventory')(
  observer(({inventory}) => {
    const abortSignal = '';
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        {/**Header*/}
        <Image source={luko} resizeMode={'contain'} style={apply(C.h10, C.my4)} />
        {/**Add List*/}

        {/**Insured List content*/}
        <EmojiList />
        {/* <View style={C.mb6} />
      <AddItemModal />*/}
      </SafeAreaView>
    );
  }),
);
