import {Dimensions} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;
export const colors = {
  blue: '#0042da',
  black: '#020202',
  black40: 'rgba(0, 0, 0, 0.4)',
  blueyGrey: '#9399ac',
  white: '#ffffff',
  paleGreyTwo: '#eff2f9',
  paleGreyThree: '#dee0e6',
  black12: 'rgba(0, 0, 0, 0.12)',
  paleGrey: '#f6f7fc',
};
export const bgColor = (color = colors.blueyGrey) => ({
  backgroundColor: color,
});
export const textColor = (color) => ({
  color: color,
});
export const emptyStateURL = 'https://orbit.kiwi/files/EmptyState-attempt-at-joke.png';

export const topBorder = {
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
};
export const luko = {
  uri: 'https://s3.amazonaws.com/blab-impact-published-production/siMboFt5mvzYQBWRqeGVydWPCrpNeln4',
};

export const fonts = {
  title1: {
    fontFamily: 'Avenir',
    fontSize: 34,
    fontWeight: '900',
    fontStyle: 'normal',
    lineHeight: 40,
    letterSpacing: 0,
    color: colors.black,
  },
  subtitle: {
    width: 91,
    height: 22,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.black,
  },
  caption: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.blueyGrey,
  },
  body1: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.black,
  },
};

export const strikeThrough = {
  textDecorationLine: 'line-through',
  textDecorationStyle: 'solid',
};
