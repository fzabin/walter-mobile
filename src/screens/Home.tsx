import * as React from 'react';

import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { Platform, StatusBar as RNStatusBar } from 'react-native';
import styled from 'styled-components/native';

import Heading from '../components/Heading';

export default function HomeScreen() {
  React.useEffect(() => {
    NavigationBar.setBackgroundColorAsync('black')
  }, [])

  return (
    <Wrapper>
      <StatusBar style="light" backgroundColor="#1d1c21" />
      <Header>
        <Heading size="huge">Hello, Jose</Heading>
      </Header>
      <CardWrapper>
        <CardLabel>Current value</CardLabel>
        <CardPrimaryText>R$1.103,14</CardPrimaryText>
        <CardRow>
          <CardColumn>
            <CardLabel>Income</CardLabel>
            <CardSecondaryText>+R$4.555,12</CardSecondaryText>
          </CardColumn>
          <CardColumn>
            <CardLabel>Expense</CardLabel>
            <CardSecondaryText>-R$3.451,98</CardSecondaryText>
          </CardColumn>
        </CardRow>
      </CardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'android'
    ? `${RNStatusBar.currentHeight}px`
    : 0};
  background-color: #1d1c21;
`;

const Header = styled.View`
  padding: 16px 20px 8px;
`;

const CardWrapper = styled.View`
  margin: 8px 20px 32px;
  padding: 24px;
  background-color: #cae7ea;
  border-radius: 18px;
`;

const CardLabel = styled.Text`
  font-size: 14px;
  color: #606060;
`;

const CardPrimaryText = styled.Text`
  margin-bottom: 8px;
  font-size: 30px;
  font-weight: bold;
  color: #000000;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CardColumn = styled.View`
  flex-direction: column;
`;

const CardSecondaryText = styled.Text`
  font-size: 18px;
  color: #000000;
  margin-right: 16px;
`;