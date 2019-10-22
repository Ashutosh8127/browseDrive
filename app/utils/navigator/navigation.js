import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import DashBoard from '../../components/Dashboard';
import DriveDetails from '../../components/DriveDetails';

const MainNavigator = createStackNavigator({
    Home: {screen: DashBoard},
    DriveDetails: {screen: DriveDetails},
  });
  
  const App = createAppContainer(MainNavigator);
  
  export default App;