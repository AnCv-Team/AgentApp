import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { BORDER, SPACING, TEXT, COLOR } from '../../../global/styles/index.style';
import IndexTab from '../../../components/IndexTab';

import Store from '../../../global/icons/outline/store.svg';
import CustomTextInput from '../../../components/Input/TextInput';
import Button from '../../../components/Buttons/Button';

const BasicStoreTab = ({ navigation }) => {
  return (
    <View style={styles.area}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <IndexTab label="1/2" title="Thông tin cơ bản" subtitle="Thông tin mà khách hàng sẽ quan tâm" />
        <Text style={styles.txtLable}>
          Tên và mô tả <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <CustomTextInput style={styles.inputText} placeholder="Tên cửa hàng của bạn" Icon={Store} />
        <CustomTextInput
          style={[styles.inputText, { height: 100 }]}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          placeholder="Mô tả cửa hàng của bạn"
        />
        <Text style={styles.txtLable}>Hình ảnh cửa hàng</Text>
        <View style={styles.layoutImage}>
          <Store height={100} width={100} fill={COLOR.GRAY} />
          <View>
            <Text style={styles.txtChooseImage}>Nhấn để chọn hình ảnh</Text>
          </View>
        </View>

        <Button
          pressed={() => {
            navigation.navigate('AddressTab');
          }}
          children="Tiếp tục"
          style={[styles.button, { backgroundColor: COLOR.LIGHT_BLUE }]}
        />
      </ScrollView>
    </View>
  );
};

export default BasicStoreTab;

const styles = StyleSheet.create({
  area: {
    height: '100%',
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: SPACING.S4,
    paddingTop: SPACING.S4,
  },
  txtLable: {
    ...TEXT.H3,
    fontWeight: 'bold',
    color: COLOR.BLACK,
    marginTop: 10,
  },
  layoutImage: {
    width: Dimensions.get('window').width - SPACING.S4 * 2,
    height: Dimensions.get('window').width - SPACING.S4 * 2,
    backgroundColor: COLOR.LIGHT,
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER.SMALL,
  },
  inputText: {
    width: '100%',
    marginTop: 5,
    paddingHorizontal: 20,
  },
  txtChooseImage: {
    ...TEXT.SUBTITLE,
    fontSize: 18,
    marginTop: 20,
    padding: 10,
  },
  button: {
    borderRadius: BORDER.SMALL,
    backgroundColor: COLOR.BLUE,
    width: '100%',
    marginBottom: 20,
  },
});
