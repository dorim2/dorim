import 'react-native-gesture-handler'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home, Signup, Login, CreateProfile, ApartmentsList} from './components'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{title: 'Signup'}}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name='CreateProfile'
          component={CreateProfile}
        />
        <Stack.Screen
          name='ApartmentsList'
          component={ApartmentsList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}