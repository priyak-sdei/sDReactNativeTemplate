import { StyleSheet } from 'react-native';
import { moderateScale, SPACING } from './index';
export const TYPOGRAPHY = StyleSheet.create({
  btnText: {
    fontFamily: 'SEMI_BOLD',
    fontSize: moderateScale(18),
  },
  error: {
    fontFamily: 'REGULAR',
    fontSize: moderateScale(14),
  },
  label: {
    fontFamily: 'REGULAR',
    fontSize: moderateScale(16),
  },
  text: {
    fontFamily: 'LIGHT',
    fontSize: moderateScale(16),
  },

  textInput: {
    fontFamily: 'MEDIUM',
    fontSize: moderateScale(16),
  },
  headerTitle: {
    fontFamily: 'SEMI_BOLD',
    fontSize: moderateScale(SPACING.l),
  },
  title: {
    fontFamily: 'MEDIUM',
    fontSize: moderateScale(18),
  },
});
