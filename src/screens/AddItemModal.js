import {ActionSheetIOS, Image, Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import C, {apply} from 'consistencss';
import {bgColor, colors, fonts, textColor} from '../gStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {inject, observer} from 'mobx-react';
import {categories} from '../store';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';

/**Custom Input component*/
const Input = ({val = '', setVal, label, extra, keyboardType, CustomInputType}) => {
  const isCorrect = val?.length > 2;
  return (
    <View
      style={apply(
        C.m4,
        C.itemsCenter,
        C.pb2,
        isCorrect && C.borderbottomBlue,
        C.borderbottomHairline,
        C.row,
        C.justifyBetween,
      )}>
      {CustomInputType && <Text style={fonts.input}>{label}</Text>}
      {CustomInputType || (
        <TextInput
          onChangeText={(text) => setVal(text)}
          value={val}
          style={apply(fonts.body1, C.flex)}
          placeholderTextColor={colors.blueyGrey}
          keyboardType={keyboardType}
          placeholder={label}
        />
      )}
      {extra && <Text>{extra}</Text>}
      {isCorrect && <Icon name="check" size={16} color={colors.blue} />}
    </View>
  );
};
const OpenCategoryPicker = (setValue) => {
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: [...categories, 'Cancel'],
      destructiveButtonIndex: 4,
      cancelButtonIndex: 4,
    },
    (buttonIndex) => {
      if (buttonIndex === 4) {
        // cancel action
      } else {
        setValue(categories[buttonIndex]);
      }
    },
  );
};
const CustomDatePicker = ({val, setVal}) => (
  <DatePicker
    style={{width: 200}}
    date={val}
    mode="date"
    showIcon={false}
    placeholder="select date"
    format="YYYY-MM-DD"
    minDate="2020-12-01"
    maxDate="2022-06-01"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    onDateChange={(date) => {
      setVal(new Date(date));
    }}
  />
);
const imgOptions = {
  width: 300,
  height: 400,
  cropping: true,
};
const chooseImage = (setImgURI) => {
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ['Upload image', 'Take picture', 'Cancel'],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 2,
    },
    (buttonIndex) => {
      if (buttonIndex === 0) {
        ImagePicker.openPicker(imgOptions).then((image) => {
          setImgURI(image.sourceURL);
        });
      } else if (buttonIndex === 1) {
        ImagePicker.openCamera(imgOptions).then((image) => {
          setImgURI(image.sourceURL);
        });
      }
    },
  );
};
const AddDocument = ({icon = 'camera', text = 'Add photo', uri, setURI}) =>
  uri ? (
    <Image source={{uri: uri}} style={apply(C.w32, C.h32, C.m4, C.bgBlue, C.radius4)} />
  ) : (
    <TouchableOpacity onPress={() => chooseImage(setURI)} style={pickerStyle}>
      <Icon name={icon} size={26} color={colors.blue} />
      <Text style={apply(C.mt2, fonts.subtitle)}>{text}</Text>
    </TouchableOpacity>
  );

export default inject('inventory')(
  observer(({inventory}) => {
    const closeModal = () => inventory.closeModal();
    const [imgURI, setImgURI] = useState('');
    const [receipt, setReceipt] = useState('');
    const [otherImg, setOtherImg] = useState('');
    const [name, setName] = useState(null);
    const [category, setCategory] = useState(categories[0]);
    const [descr, setDescr] = useState('');
    const [date, setDate] = useState(new Date());
    const [price, setPrice] = useState(0);

    const onSave = () => {
      const numberPrice = Number(price?.replace(',', '.'));
      inventory.addInsuredObject(name, imgURI, numberPrice, date, descr, category);
      setImgURI('');
      setName('');
      setCategory(categories[0]);
      setDate(new Date());
      closeModal();
    };
    return (
      <Modal animationType="slide" presentationStyle={'pageSheet'} visible={inventory.showModal}>
        {/**Header*/}
        <View style={apply(C.row, C.justifyBetween, C.m4)}>
          <Icon name="times" onPress={closeModal} size={16} color={colors.blueyGrey} />
          <Text style={apply(fonts.subtitle)}>New Object</Text>
          <Text onPress={onSave}>Save</Text>
        </View>
        <View style={apply(bgColor(colors.paleGrey), C.itemsCenter)}>
          {/**Img*/}
          <AddDocument uri={imgURI} setURI={setImgURI} />
        </View>
        <View>
          <Input label={'Name'} setVal={setName} val={name} />
          <Input label={'Description'} setVal={setDescr} val={descr} />
          <Input
            label={'Purchase Value'}
            keyboardType={'decimal-pad'}
            setVal={(val) => setPrice(val)}
            val={price}
            extra="   €   "
          />
          <Input
            label={'Category'}
            CustomInputType={
              <Text
                style={apply(fonts.subtitle, textColor(colors.blue), C.py4)}
                onPress={() => OpenCategoryPicker(setCategory)}>
                {category}
              </Text>
            }
          />
          <Input label={'Purchase Date'} CustomInputType={<CustomDatePicker val={date} setVal={setDate} />} />

          <Text style={[fonts.input, C.m4]}>Documents</Text>
          <View style={C.row}>
            <AddDocument icon={'file-medical'} text={'Add Receipt'} uri={receipt} setURI={setReceipt} />
            <AddDocument uri={otherImg} setURI={setOtherImg} />
          </View>
        </View>
      </Modal>
    );
  }),
);
const pickerStyle = apply(
  C.selfCenter,
  C.radius2,
  C.m4,
  C.borderHairline,
  C.borderBlue,
  C.itemsCenter,
  C.justifyCenter,
  C.w32,
  C.h32,
  {
    borderStyle: 'dashed',
  },
);
