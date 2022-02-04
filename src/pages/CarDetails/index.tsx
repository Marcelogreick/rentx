import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';

import {
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
  About,
  Accessories,
  Footer
} from './styles';
import { Accessory } from '../../components/Accessory';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function CarDetails() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleConfirmRental() {
    navigate('Scheduling');
  }

  return (
    <Container>
      <Header>
        <BackButton
          onPress={handleConfirmRental}
        />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://cdn.pixabay.com/photo/2019/05/21/12/28/car-4218972_960_720.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory
            name="380Km/h"
            icon={SpeedSvg}
          />

          <Accessory
            name="3.2s"
            icon={AccelerationSvg}
          />

          <Accessory
            name="800 HP"
            icon={ForceSvg}
          />
        </Accessories>

        <About>
          Lamborghini é uma fabricante italiana de automóveis
          desportivos de luxo e de alto desempenho criada
          originalmente para competir com a Ferrari com
          sede no município de Sant'Agata Bolognese.
        </About>
      </Content>

      <Footer>
        <Button
          title='Escolher periodo do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
