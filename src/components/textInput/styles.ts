import {StyleSheet, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  containerStyle: {
    width: width,
    alignItems: 'center',
  },
  txtInputStyle: {
    width: 0.9 * width,
    height: 40,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    paddingLeft: 10,
  },
});
