import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: Props){
  const theme = useTheme();

  return (
    <Container
      color={color}
      loading={loading}
      enabled={enabled}
      {...rest}>
      {
        loading? <ActivityIndicator color={theme.colors.shape} /> :
        <Title light={light}>{title}</Title>
      }
    </Container>
  );
}