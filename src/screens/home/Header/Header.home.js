import React from 'react';

import { StyleSheet, View, Image } from 'react-native';
import HeaderIcons from './HeaderIcons.home';

import { BORDER, SPACING, COLOR } from '../../../global/styles/index.style';

import Logo from '../../../global/svgs/logo.svg';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.titleArea}>
        <View style={styles.miniIconsArea} />
        <View style={styles.logoArea}>
          <Logo height={60} />
        </View>
        <View>
          <Image
            source={{ uri: 'https://picsum.photos/200' }}
            loadingIndicatorSource={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.avatar}
          />
        </View>
      </View>

      <HeaderIcons />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR.BLUE,
    paddingTop: SPACING.S3,
    paddingBottom: SPACING.S5,
    alignItems: 'center',
    marginBottom: 20,
  },
  titleArea: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.S4,
    marginBottom: SPACING.S6,
  },
  miniIconsArea: {
    width: 40,
    height: 40,
  },
  logoArea: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: BORDER.PILL,
    borderColor: COLOR.WHITE,
    borderWidth: 2,
  },
});
