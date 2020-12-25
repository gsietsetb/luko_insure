import React from 'react';
import {Image, Text, View} from 'react-native';
import C, {apply} from 'consistencss';
import {fonts, strikeThrough, topBorder} from '../gStyles';

export default ({item, index}) => {
  /* const dispatch = useDispatch();*/
  /* const swipeRef = useRef();*/
  /*const state = useTrackedState();
  const currentTodo = state.todoMap[item.id];
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(currentTodo.description);
  const destroyTask = () => {
    dispatch({type: 'DELETE_TODO', id: currentTodo.id});
  };*/
  /*const editTask = () => {
    dispatch({type: 'UPDATE_TODO', id: currentTodo.id, text: editText});
    setEditMode(false);
    /!**This was tend to close the swipe row
     *  when button is released
     * swipeRef.current.reset();*!/
  };

  const checked = currentTodo.completed_at;
  const toggleTask = () =>
    dispatch({type: 'TOGGLE_TODO', todo: currentTodo, wasChecked: checked});*/
  const checked = false;
  const img = {uri: 'https://picsum.photos/id/' + (index + 200) + '/200/300'};
  return item ? (
    <View style={apply(C.itemsCenter, C.radius2, C.bgWhite, C.flex, C.m3)}>
      <Image
        source={img}
        resizeMode={'cover'}
        style={apply({width: '100%'}, C.h40, C.bgRed, C.mb4, topBorder)}
      />
      <Text
        style={apply(
          fonts.body1,
          C.textStart,
          C.mx1,
          C.flex,
          checked && [strikeThrough, C.textGrey],
        )}>
        {item.toString()}
      </Text>
      <Text style={apply(fonts.caption, C.mx1, C.flex)}>{index * 324} €</Text>
    </View>
  ) : (
    <View />
  );
};
