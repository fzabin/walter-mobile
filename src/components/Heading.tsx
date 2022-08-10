import * as React from 'react';

import styled, { css } from 'styled-components/native';

type HeadingProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'huge';
};

export default function Heading({ children, size = 'medium' }: HeadingProps) {
  return <Text size={size}>{children}</Text>;
}

const wrapperModifiers = {
  small: () => css`
    font-size: 18px;
  `,

  medium: () => css`
    font-size: 24px;
  `,

  huge: () => css`
    font-size: 32px;
    font-weight: bold;
  `,
};

type TextProps = Pick<HeadingProps, 'size'>;

const Text = styled.Text<TextProps>`
  ${({ size }) => css`
    margin-bottom: 16px;
    color: white;

    ${!!size && wrapperModifiers[size]()}
  `}
`;
