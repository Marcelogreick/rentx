import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Footer, Message, Title } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  // hooks ( como useWindowDimensions) só funcionam dentro de components react, fora deles use a Dimensions do react-native
  const { width } = useWindowDimensions();

  function handleConfirm() {
    navigate('Home')
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado</Title>

        <Message>
        Agora você so precisa retirar
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
