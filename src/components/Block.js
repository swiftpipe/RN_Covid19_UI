import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*
*

Define props 
block : flex view
margin
padding
width
height
border
borderWidth
borderColor
color => is background color of view
.... your can custom if you want

*/

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const Block = ({
  block,
  margin,
  padding,
  paddingHorizontal,
  paddingVertical,
  width,
  height,
  border,
  borderWidth,
  borderColor,
  centered,
  color,
  style,
  direction,
  middle,
  children,
  justifyContent,
  borderRadius,
  shadow,
  ...props
}) => {
  const styleComponent = [
    block && styles.block,
    margin && {margin},
    padding && {padding},
    width && {width},
    height && {height},
    border && {borderWidth: 1, borderColor: 'gray'},
    borderWidth && {borderWidth},
    borderColor && {borderColor},
    color && {backgroundColor: color},
    centered && {justifyContent: 'center'},
    justifyContent && {justifyContent},
    direction && {flexDirection: direction},
    paddingVertical && {paddingVertical},
    paddingHorizontal && {paddingHorizontal},
    middle && {alignItems: 'center'},
    borderRadius && {borderRadius},
    shadow && {
      shadowOpacity: 0.12,
      shadowRadius: 15,
      shadowColor: 'gray',
      shadowOffset: {height: 0, width: 0},
    },
    style,
  ];
  return (
    <View style={styleComponent} {...props}>
      {children}
    </View>
  );
};

export default Block;
