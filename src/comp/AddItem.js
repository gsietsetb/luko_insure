import C, {apply, TouchableOpacity} from 'consistencss';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors, fonts} from '../gStyles';
import {Text, View} from 'react-native';
import React, {useState} from 'react';

export default () => {
  /*
    const dispatch = useDispatch();
  */
  const [newTask, setNewTask] = useState('');
  const canAddTask = newTask?.length > 0;

  /*const addTodo = () => {
    if (canAddTask) {
      dispatch({type: 'CREATE_TODO', descr: newTask});
      setNewTask('');
    } else {
      Alert.alert('Warning', 'Please type at least one character');
    }
  };*/
  return (
    <View style={apply(C.row, C.justifyBetween, C.m4, C.itemsCenter)}>
      <Text style={apply(fonts.title1)}>Inventory</Text>

      <TouchableOpacity style={apply(C.bgBlue, C.radius18, C.w8, C.h8, C.itemsCenter, C.justifyCenter)}>
        <Icon
          name="plus"
          onPress={() => {}}
          size={16}
          /*style={apply(C.bgBlue, C.radius18, C.p2)}*/
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};
