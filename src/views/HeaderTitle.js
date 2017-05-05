/* @flow */

import React from 'react';

import { Platform, StyleSheet, Text } from 'react-native';

import type { Style } from '../TypeDefinition';

type Props = {
  tintColor?: ?string,
  style?: Style,
};

const HeaderTitle = ({ style, ...rest }: Props) => (
  <Text
    numberOfLines={1}
    {...rest}
    style={[styles.title, style]}
    accessibilityTraits="header"
  />
);

const styles = StyleSheet.create({
  title: {
    fontSize:  17 ,
    fontWeight:  '600',
    color: 'rgba(0, 0, 0, .9)',
    textAlign:  'center',
    marginHorizontal: 16,
  },
});

export default HeaderTitle;
