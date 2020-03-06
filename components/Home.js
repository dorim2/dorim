import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, welcome to home!</Text>
        <Button 
          title='signup'
          type='clear'
          onPress = {() => this.props.navigation.navigate('Signup')}
        >
        </Button>
        <Button 
          title='login'
          type='clear'
          onPress = {() => this.props.navigation.navigate('Login')}
          >
        </Button>
      </View>
    )
  }
}