import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'


export default class Signup extends Component {
  render() {
    return (
      <View style={{display: 'flex', justifyContent: 'center'}}>
            <Input label='email'/>
            <Input label='password'/>
            <Input label='confirm password'/>
            <Button type='clear' title='sign up'></Button>
      </View>
    )
  }
}