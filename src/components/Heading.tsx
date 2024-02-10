import * as React from 'react';
import { Text } from 'react-native';

type HeadingProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'huge';
};

const wrapperModifiers = {
  small: () => {
    return {fontSize: 18}
  },

  medium: () => {
    return {fontSize: 24}
  },

  huge: () => {
    return {
      fontSize: 32,
      fontWeight: 'bold',
    }
  },
};

export default function Heading({ children, size = 'medium' }: HeadingProps) {
  return <Text style={{
    marginBottom: 16,
    color: '#ffffff',
    ...wrapperModifiers[size]()
  }}>
    {children}
  </Text>;
}