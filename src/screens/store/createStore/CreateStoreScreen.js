import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import HeaderBackButton from '../../../components/Buttons/HeaderBackButton';

import { TEXT, COLOR } from '../../../global/styles/index.style';

import TopBarNavigator from '../../../components/TopBarNavigator';
import BasicStoreTab from './BasicStoreTab';
import AddressStoreTab from './AddressStoreTab';

import Assignment from '../../../global/icons/outline/assignment.svg';
import Place from '../../../global/icons/outline/place.svg';

const topBarList = [
  {
    name: 'BasicTab',
    label: 'Cơ bản',
    icon: Place,
    tabScreen: BasicStoreTab,
  },
  {
    name: 'AddressTab',
    label: 'Địa điểm',
    icon: Assignment,
    tabScreen: AddressStoreTab,
  },
];

const CreateStoreScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <HeaderBackButton styleButton={styles.backButton} navigation={navigation} />
        <Text style={styles.title}>Tạo cửa hàng</Text>
      </View>
      <View style={styles.tabScreen}>
        <TopBarNavigator topBarList={topBarList} scrollHandel={null} HEADER_MAX_HEIGHT={100} />
      </View>
    </SafeAreaView>
  );
};

export default CreateStoreScreen;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  tabScreen: {
    flex: 1,
  },
  title: {
    ...TEXT.H1,
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  backButton: {},
});
