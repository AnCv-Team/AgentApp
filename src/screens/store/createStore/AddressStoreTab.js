import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { SPACING, TEXT, COLOR } from '../../../global/styles/index.style';
import IndexTab from '../../../components/IndexTab';

import SelectInput from '../../../components/Input/SelectInput';
import Button from '../../../components/Buttons/Button';
import OutlineButton from '../../../components/Buttons/OutlineButton';
import CustomTextInput from '../../../components/Input/TextInput';
import Dialpad from '../../../global/icons/outline/dialpad.svg';
import FormGroup from '../../../components/FormGroup';

const cities = ['Đà Nẵng', 'Quảng Nam'];
const districts = {
  'Đà Nẵng': ['Liên Chiểu', 'Cẩm Lệ', 'Hoà Vang', 'Sơn Trà'],
  'Quảng Nam': ['QN1', 'QN2'],
};

const AddressStoreTab = () => {
  const handleChangedCity = () => {};

  const listInputSelect = [
    {
      label: 'Tỉnh / Thành phố',
      dataInput: cities,
      valueInput: cities[0],
      handelChange: handleChangedCity,
    },
    {
      label: 'Quận / Huyện',
      dataInput: districts['Đà Nẵng'],
      valueInput: districts['Đà Nẵng'][0],
      handelChange: handleChangedCity,
    },
    {
      label: 'Xã / Phường',
      dataInput: districts['Đà Nẵng'],
      valueInput: districts['Đà Nẵng'][0],
      handelChange: handleChangedCity,
    },
  ];

  return (
    <View style={styles.area}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <IndexTab index="2/2" />
        <Text style={styles.txtLableGroup}>
          Vị trí cửa hàng <Text style={{ color: 'red' }}>*</Text>
        </Text>
        {listInputSelect.map((item, index) => {
          return (
            <FormGroup key={index} label={item.label}>
              <SelectInput
                data={item.dataInput}
                value={item.valueInput}
                style={styles.inputOption}
                onChange={item.handelChange}
              />
            </FormGroup>
          );
        })}

        <Text style={styles.txtLableGroup}>Thông tin liên hệ</Text>
        <FormGroup>
          <Text style={styles.txtLabelInput}>
            Số điện thoại <Text style={{ color: 'red' }}>*</Text>
          </Text>
          <CustomTextInput
            style={styles.inputOption}
            placeholder="Số điện thoại cửa hàng"
            Icon={Dialpad}
            keyboardType="phone-pad"
          />
        </FormGroup>
        <FormGroup label="Facebook">
          <Button
            style={[styles.button, { backgroundColor: '#0D1CA3' }]}
            pressed={null}
            children="Liên kết vs Facebook"
          />
        </FormGroup>
        <FormGroup label="Zalo">
          <Button
            pressed={null}
            children="Liên kết với Zalo"
            style={[styles.button, { backgroundColor: COLOR.LIGHT_BLUE }]}
          />
        </FormGroup>
        <FormGroup label="Google">
          <OutlineButton pressed={null} children="Liên kết với Google" style={styles.button} />
        </FormGroup>

        <Button
          pressed={null}
          children="Hòa thành"
          style={[styles.button, { backgroundColor: COLOR.SUCCESS, marginBottom: 20 }]}
        />
      </ScrollView>
    </View>
  );
};

export default AddressStoreTab;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    height: '100%',
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: SPACING.S4,
    paddingTop: SPACING.S4,
  },
  txtLableGroup: {
    ...TEXT.H3,
    fontWeight: 'bold',
    color: COLOR.BLACK,
    marginTop: 10,
  },
  formGroup: {
    marginVertical: 5,
  },
  txtLabelInput: {
    ...TEXT.STRONG,
    marginBottom: 2,
  },
  inputOption: {
    width: '100%',
  },
  txtChooseImage: {
    ...TEXT.SUBTITLE,
    fontSize: 18,
    marginTop: 20,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
});
