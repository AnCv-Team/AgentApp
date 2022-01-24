import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import HeaderBackButton from '../../components/Buttons/HeaderBackButton';

import { BORDER, SPACING, TEXT, COLOR } from '../../global/styles/index.style';

import Icons from 'react-native-vector-icons/Ionicons';

function HeaderImportGoods({ navigation }) {
  return (
    <View style={styles.area}>
      <View style={{ height: 50 }}>
        <HeaderBackButton navigation={navigation} styleButton={{ left: 0 }} />
      </View>
      <Text style={styles.title}>Nhập các mặt hàng có nguồn gốc rõ ràng!</Text>
      <View>
        <TextInput style={styles.inputText} placeholder="Tìm kiếm" />
        <View style={styles.areaSearch}>
          <Icons style={styles.iconSearch} name="search-outline" size={25} />
        </View>
      </View>
    </View>
  );
}

export default HeaderImportGoods;

const styles = StyleSheet.create({
  area: {
    backgroundColor: COLOR.BLUE,
    padding: SPACING.S4,
    paddingBottom: 100,
    borderBottomLeftRadius: BORDER.LARGER,
    borderBottomRightRadius: BORDER.LARGE,
  },
  title: {
    ...TEXT.H1,
    marginTop: 20,
    color: COLOR.WHITE,
    fontWeight: '700',
  },
  inputText: {
    backgroundColor: COLOR.WHITE,
    padding: 10,
    marginVertical: 10,
    borderRadius: BORDER.PILL,
  },
  areaSearch: {
    position: 'absolute',
    right: 10,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  iconSearch: {
    backgroundColor: COLOR.BLUE,
    color: COLOR.WHITE,
    borderRadius: BORDER.PILL,
    padding: 5,
  },
});
