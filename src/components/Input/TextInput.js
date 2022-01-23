import React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';
import { BORDER, COLOR, TEXT, SPACING } from '../../global/styles/index.style';

/**
 * TextInput Element
 * @param {String} value
 * @param {String} placeholder
 * @param {Enumerator} keyboardType - ["default", "number-pad", "decimal-pad", "numeric", "email-address", "phone-pad"]
 * @param {Event} textChanged
 * @param {Boolean} isPassword
 * @param {Boolean} showContent - Active when [isPassword] is set. Default = true
 * @param {Style} style - Additional style
 * @param {SVGElement} Icon - Right Icon
 * @param {Event} iconPressed - Right Icon's press event
 * @returns
 */
const CustomTextInput = ({
  value,
  placeholder,
  keyboardType,
  textChanged,
  isPassword,
  showContent = true,
  style,
  Icon,
  iconPressed,
  multiline = false,
  numberOfLines = 1,
  textAlignVertical = 'center',
}) => {
  return (
    <View style={[styles.area, style]}>
      <TextInput
        value={value}
        style={[styles.text, { textAlignVertical }]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={textChanged}
        secureTextEntry={isPassword ? showContent : false}
        textContentType={isPassword ? 'password' : 'none'}
        autoComplete={isPassword ? 'password' : 'off'}
        placeholderTextColor={COLOR.GRAY}
        selectionColor={COLOR.BLUE}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {Icon && <Icon height={22} style={styles.icon} width={22} fill={COLOR.BLUE} onPress={iconPressed} />}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  area: {
    // borderRadius: BORDER.SMALL,
    // borderColor: COLOR.BLUE,
    // borderWidth: 1,
    backgroundColor: COLOR.LIGHT,
    borderRadius: BORDER.SMALL,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...TEXT.REGULAR,
    flexGrow: 1,
    paddingStart: SPACING.S2,
    paddingEnd: SPACING.S2,
  },
  icon: {
    position: 'absolute',
    right: SPACING.S4,
  },
});
