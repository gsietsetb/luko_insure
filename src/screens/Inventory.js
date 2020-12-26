import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {colors, fonts, luko} from '../gStyles';
import C, {apply, TouchableOpacity} from 'consistencss';
import Icon from 'react-native-vector-icons/FontAwesome5';
import InsuredList from '../comp/InsuredList';
import React from 'react';
import AddItemModal from './AddItemModal';
import {inject, observer} from 'mobx-react';

export default inject('inventory')(
  observer(({inventory}) => {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        {/**Header*/}
        <Image source={luko} resizeMode={'contain'} style={apply(C.h10, C.my4)} />
        {/**Add List*/}
        <View style={apply(C.row, C.justifyBetween, C.m4, C.itemsCenter)}>
          <Text style={apply(fonts.title1)}>Inventory</Text>

          <TouchableOpacity style={apply(C.bgBlue, C.radius18, C.w8, C.h8, C.itemsCenter, C.justifyCenter)}>
            <Icon name="plus" onPress={() => inventory.openModal()} size={16} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/**Todos List content*/}
        <InsuredList />
        <View style={C.mb6} />
        <AddItemModal />
      </SafeAreaView>
    );
  }),
);
