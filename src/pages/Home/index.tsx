import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { CardList, Container, Header, HeaderContent, TotalCars } from './styles';

export function Home() {
  const dataCard = {
    id: 1,
    brand: 'Audi',
    name: 'R$ 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/09/804A0414-e1600269680499.jpg?resize=650,432'
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <TotalCars>Total de carros</TotalCars>
        </HeaderContent>
      </Header>

      <CardList
        data={[1, 2]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) =>
          <Car
            data={dataCard}
          />
        }
      />
    </Container>
  );
}
