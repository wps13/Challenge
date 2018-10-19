import React from 'react';
import Login from './src/modules/Auth/components/Login/Index'
import Register from './src/modules/Auth/components/Register/Index'
import Product from './src/modules/Create/components/Product/Index'

import { createStackNavigator } from 'react-navigation'

const Routes = 
  createStackNavigator(
    {
      Login:{
        screen: Login,
        navigationOptions: {
          header: null,
        }
      }, 
      Register:{
        screen:Register,
        navigationOptions:{
          title:"Register"
        },
      Product:{
        screen: Product,
          navigationOptions:{
            header:null,
          }
      },
      } 
    },
    {
      initialRouteName: 'Login',
    }
  )

const App = () => <Routes />

export default App
