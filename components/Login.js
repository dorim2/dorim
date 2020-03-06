import React, { Component } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'

export default class Login extends Component {
  render() {
    return (
        <View style={{display: 'flex', justifyContent: 'center'}}>
            <Input label='email'/>
            <Input label='password'/>
            <Button type='clear' title='sign up'></Button>
        </View>
    );
  }
}