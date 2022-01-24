import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { COLOR, SPACING, BORDER, TEXT } from '../../../global/styles/index.style';
import IndexTab from '../../../components/IndexTab';

import Check from '../../../global/icons/outline/check.svg';
import Store from '../../../global/icons/outline/store.svg';
import Button from '../../../components/Buttons/Button';
import OutlineButton from '../../../components/Buttons/OutlineButton';

const WIDTH = Dimensions.get('window').width;

const CreateSuccessStoreScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <IndexTab
          Icon={Check}
          fillIcon={COLOR.SUCCESS}
          title="Hoàn thành"
          subtitle="Cửa hàng đã được tạo"
          borderColor={{ borderColor: COLOR.SUCCESS }}
        />
        <View style={styles.layoutImage}>
          <Store height={250} width={250} fill={COLOR.SUCCESS} />
          <View>
            <Text style={styles.txtSub}>Cửa hàng của bạn</Text>
            <Text style={styles.txtMain}>Đã được tạo</Text>
          </View>
        </View>
        <Button
          pressed={() => {
            // navigation.navigate('AddressTab');
          }}
          children="Bắt đầu thêm sản phẩm mới"
          style={[styles.button, { backgroundColor: COLOR.SUCCESS }]}
        />
        <OutlineButton
          pressed={() => {
            navigation.navigate('Home');
          }}
          children="Trang chủ"
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateSuccessStoreScreen;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  container: {
    width: WIDTH,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.S4,
  },
  layoutImage: {
    width: WIDTH - SPACING.S4 * 2,
    height: WIDTH - SPACING.S4 * 2,
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER.SMALL,
  },
  button: {
    marginBottom: 20,
    width: '100%',
  },
  txtSub: {
    color: COLOR.SUCCESS,
    textAlign: 'center',
    ...TEXT.H3,
    marginTop: 10,
  },
  txtMain: {
    color: COLOR.SUCCESS,
    textAlign: 'center',
    ...TEXT.H2,
    fontWeight: 'bold',
  },
});
