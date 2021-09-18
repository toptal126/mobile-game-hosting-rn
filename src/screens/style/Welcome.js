import {StyleSheet} from 'react-native';

import {windowWidth, windowHeight} from '../../config/config';

export const widthRate = windowWidth / 360;

export const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#242A38',
  },
  userImg: {
    borderRadius: 50,
    position: 'absolute',
  },
  userContainer: {
    width: windowWidth,
    height: 240,
  },
  mainContainer: {
    width: windowWidth,
    height: windowHeight - 264,
    alignItems: 'center',
  },
  logoImg: {
    width: 96,
    height: 96,
  },
  logoBigName: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    letterSpacing: 0.5,
  },
  logoSmallName: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'OpenSans-BoldItalic',
    lineHeight: 20,
  },
  descText1: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 17,
    letterSpacing: 5,
    color: 'white',
    marginTop: 16,
  },
  descText2: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 25,
    color: 'white',
    marginTop: 5,
  },
  signInButton: {
    height: 48,
    width: 248 * widthRate,
    borderRadius: 24,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signDesc1: {
    color: '#96A7AF',
    fontSize: 12,
  },
  signDesc2: {
    color: 'rgb(255, 130, 47)',
    fontSize: 12,
    fontFamily: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 24,
  },
  footerImg: {
    width: 30,
    height: 30,
    marginLeft: 8,
  },
  footerText1: {
    color: 'white',
    fontSize: 12,
  },
  footerText1: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
});
