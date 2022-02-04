import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type
} from './styles';
interface Props extends RectButtonProps {
  data: Car;
}

interface Car {
  id: number,
  brand: string,
  name: string,
  rent: {
    period: string,
    price: number,
  },
  thumbnail: string
}

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>{'\n'}
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>

          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
