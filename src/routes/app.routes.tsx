
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { CarDetails } from '../pages/CarDetails';
import { Scheduling } from '../pages/Scheduling';
import { SchedulingDetails } from '../pages/SchedulingDetails';
import { SchedulingComplete } from '../pages/SchedulingComplete';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
      />
      <Screen
        name="ShedulingDetails"
        component={SchedulingDetails}
      />
      <Screen
        name="Confirmation"
        component={SchedulingComplete}
      />
    </Navigator>
  )
}
