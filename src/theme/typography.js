import { StyleSheet } from 'react-native';
import { moderateScale, SPACING } from './index';
export const TYPOGRAPHY = StyleSheet.create({
  btnText: {
    fontFamily: 'SEMI_BOLD',
    fontSize: moderateScale(18),
  },
  error: {
    fontFamily: 'REGULAR',
    fontSize: moderateScale(12),
  },
  headerTitle: {
    fontFamily: 'SEMI_BOLD',
    fontSize: moderateScale(SPACING.l),
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
  title: {
    fontFamily: 'MEDIUM',
    fontSize: moderateScale(18),
  },
});
