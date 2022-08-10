import * as React from 'react';
import styled from 'styled-components/native';

export default function HomeScreen() {
  return (
    <Wrapper>
      <Text>Home Screen</Text>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text``