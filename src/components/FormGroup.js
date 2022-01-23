import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TEXT } from '../global/styles/index.style';
/**
 * @param  {String} label
 * @param  {Components} children
 */
const FormGroup = ({ label, children }) => {
  return (
    <View style={styles.formGroup}>
      {label && <Text style={styles.txtLabelInput}>{label}</Text>}
      {children && children}
    </View>
  );
};

export default FormGroup;

const styles = StyleSheet.create({
  formGroup: {
    marginVertical: 5,
  },
  txtLabelInput: {
    ...TEXT.STRONG,
    marginBottom: 2,
  },
});
