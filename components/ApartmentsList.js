import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class ApartmentsList extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, welcome to apartmets list!</Text>
      </View>
    )
  }
}