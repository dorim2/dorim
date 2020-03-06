import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, welcome to home!</Text>
        <Button 
          title='signup'
          onPress = {() => this.props.navigation.navigate('Signup')}
        >
        </Button>
        <Button 
          title='login'
          onPress = {() => this.props.navigation.navigate('Login')}
          >
        </Button>
      </View>
    );
  }
}