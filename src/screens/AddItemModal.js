import {Modal, Text, View} from 'react-native';
import React from 'react';
import C, {apply} from 'consistencss';
import {bgColor, colors, fonts} from '../gStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {inject, observer} from 'mobx-react';

export default inject('inventory')(
  observer(({inventory}) => {
    const closeModal = () => inventory.closeModal();
    return (
      <Modal
        animationType="slide"
        presentationStyle={'pageSheet'}
        visible={inventory.showModal}
        /*onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}*/
      >
        <View style={apply(bgColor(colors.paleGrey), C.flex)}>
          <View style={apply(C.row, C.justifyBetween, C.m4, C.itemsCenter)}>
            <Icon
              name="times"
              onPress={closeModal}
              size={16}
              /*style={apply(C.bgBlue, C.radius18, C.p2)}*/
              color={colors.blueyGrey}
            />
            <Text style={apply(fonts.subtitle)}>New Object</Text>
            <Text onPress={closeModal}>Save</Text>
          </View>
        </View>
      </Modal>
    );
  }),
);
