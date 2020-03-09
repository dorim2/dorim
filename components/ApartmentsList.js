import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Fire from '../Fire'

export default ApartmentsList = () => {

    return (
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', margin: '2%' }}>
        <Button
          raised
          icon={{name: 'add'}}
          title='add listing' 
          onPress={() => this.props.navigation.navigate('CreateListing')}
        />
      </View>
    )
}