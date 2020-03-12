import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Fire from '../Fire'

export default ApartmentsList = (props) => {

  // declare rooms on state
  const [rooms, setRooms] = useState([])

  // get rooms
  useEffect(() => {
    Fire.shared.getRooms((room) => {
      setRooms([room])
      // alert(rooms.length)
    }, [])
  })

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', margin: '2%' }}>
      {rooms.map(room => {
        <h1>{room.kosher} kosher</h1>
      })}
      <Button
        raised
        icon={{name: 'add'}}
        title='add listing' 
        onPress={() => props.navigation.navigate('CreateListing')}
      />
    </View>
  )
}