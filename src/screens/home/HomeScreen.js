import React, { Fragment } from 'react';

import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';

import Header from './Header/Header.home';
import COLOR from '../../global/styles/color.style';
import SectionHome from './SectionHome';
import { partner_business, product_service, useful_information } from './options.home';
import AnotherProductSection from './AnotherProductSection.home';

const HomeScreen = ({ navigation }) => {
  return (
    <Fragment>
      <SafeAreaView>
        <StatusBar animated={true} backgroundColor={COLOR.BLUE} barStyle="light-content" showHideTransition="slide" />
        <ScrollView style={styles.area} overScrollMode="never">
          {/* Header */}
          <Header />
          {/* Body */}
          <SectionHome options={partner_business} navigation={navigation} />
          <SectionHome options={product_service} navigation={navigation} />
          <SectionHome options={useful_information} navigation={navigation} />
          {/* Footer */}
          <AnotherProductSection />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  area: {
    backgroundColor: COLOR.WHITE,
  },
});
