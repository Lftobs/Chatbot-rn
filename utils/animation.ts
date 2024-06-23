import { Keyframe, Easing } from 'react-native-reanimated';

export const getanimation = (i: number) => {
    switch (i) {
      case 0:
        return enteringAnimation;
      case 1:
        return enteringAnimation1.delay(1050 * i);
      case 2:
        return enteringAnimation2.delay(1050 * i);
      case 3:
        return enteringAnimation3.delay(1050 * i);
      case 4:
        return enteringAnimation4.delay(1050 * i);
      default:
        return enteringAnimation;
    }
  }

export const enteringAnimation = new Keyframe({
    0: {
      originY: 0,
      transform: [{ rotate: '15deg' }],
      opacity: 1,
      display: 'flex'
    },
    50: {
      originY: -100,
      transform: [{ rotate: '-180deg' }],
      opacity: 0.8,
      display: 'flex'
    },
    90: {
      originY: -248,
      transform: [{ rotate: '-15deg' }],
      opacity: 0.1,
      display: 'flex'
    },
    100: {
      originY: -250,
      transform: [{ rotate: '0deg' }],
      opacity: 0,
      display: 'none',
      easing: Easing.linear,
    },
  }).duration(6000);

export const enteringAnimation1 = new Keyframe({
    0: {
      originY: 0,
      transform: [{ rotate: '15deg' }],
      opacity: 1,
      display: 'flex'
    },
    50: {
      originY: -100,
      transform: [{ rotate: '-180deg' }],
      opacity: 0.8,
      display: 'flex'
    },
    90: {
      originY: -248,
      transform: [{ rotate: '-15deg' }],
      opacity: 0.1,
      display: 'flex'
    },
    100: {
      originY: -250,
      transform: [{ rotate: '0deg' }],
      opacity: 0,
      display: 'none',
      easing: Easing.linear,
    },
  }).duration(6000);

export const enteringAnimation2 = new Keyframe({
    0: {
      originY: 0,
      transform: [{ rotate: '15deg' }],
      opacity: 1,
      display: 'flex'
    },
    50: {
      originY: -100,
      transform: [{ rotate: '-180deg' }],
      opacity: 0.8,
      display: 'flex'
    },
    90: {
      originY: -248,
      transform: [{ rotate: '-15deg' }],
      opacity: 0.1,
      display: 'flex'
    },
    100: {
      originY: -250,
      transform: [{ rotate: '0deg' }],
      opacity: 0,
      display: 'none',
      easing: Easing.linear,
    },
  }).duration(6000);

export const enteringAnimation3 = new Keyframe({
    0: {
      originY: 0,
      transform: [{ rotate: '15deg' }],
      opacity: 1,
      display: 'flex'
    },
    50: {
      originY: -100,
      transform: [{ rotate: '-180deg' }],
      opacity: 0.8,
      display: 'flex'
    },
    90: {
      originY: -248,
      transform: [{ rotate: '-15deg' }],
      opacity: 0.1,
      display: 'flex'
    },
    100: {
      originY: -250,
      transform: [{ rotate: '0deg' }],
      opacity: 0,
      display: 'none',
      easing: Easing.linear,
    },
  }).duration(6000);

export const enteringAnimation4 = new Keyframe({
    0: {
      originY: 0,
      transform: [{ rotate: '15deg' }],
      opacity: 1,
      display: 'flex'
    },
    50: {
      originY: -100,
      transform: [{ rotate: '-180deg' }],
      opacity: 0.8,
      display: 'flex'
    },
    90: {
      originY: -248,
      transform: [{ rotate: '-15deg' }],
      opacity: 0.1,
      display: 'flex'
    },
    100: {
      originY: -250,
      transform: [{ rotate: '0deg' }],
      opacity: 0,
      display: 'none',
      easing: Easing.linear,
    },
  }).duration(6000);
