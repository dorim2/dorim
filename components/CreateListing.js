import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button, ButtonGroup, Header } from 'react-native-elements'
import Fire from '../Fire'

export default class CreateListing extends Component {
    constructor() {
        super()
        this.state = {
            bio: '',
            kosherIndex: -1,
            shabbatIndex: -1,
            genderIndex: -1,
            roomTypeIndex: -1,
            kosherOptions: ['glatt kosher', 'kosher style', 'vegan', 'other'], 
            shabbatOptions: ['shomer shabbat', 'shabbat respectful', 'other'],
            genderOptions: ['girls only', 'guys only', 'co-ed'],
            roomTypeOptions: ['shared room', 'private room', 'entire apartment']
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // update state with info
    handleChange(event) {
        this.setState(prevState => {
            return {...prevState, ...event}
        })
    }

    // validate user input and send to database
    async handleSubmit() {
        try {
            if (this.state.kosherIndex < 0) {
                throw new Error('please choose a kosher option')
            }

            if (this.state.shabbatIndex < 0) {
                throw new Error('please choose a kosher option')
            }

            if (this.state.genderIndex < 0) {
                throw new Error('please choose a gender option')
            }

            if (this.state.roomTypeIndex < 0) {
                throw new Error('please choose a room type option')
            }

            // send info to backend
            const kosherStatus = this.state.kosherOptions[this.state.kosherIndex]
            const shabbatStatus = this.state.shabbatOptions[this.state.shabbatIndex]
            const genderStatus = this.state.genderOptions[this.state.genderIndex]
            const roomType = this.state.roomTypeOptions[this.state.roomTypeIndex]
            const bio = this.state.bio
            const status = await Fire.shared.createListing(kosherStatus, shabbatStatus, genderStatus, roomType, bio)

            // status returns an error message if signup failed, null otherwise
            if (status) alert(status)

            // if signup successful, navigate to create profile
            else this.props.navigation.navigate('ApartmentsList')
        } catch(error) {
            alert(error)
        }
    }

  render() {
    return (
      <View style={{display: 'flex', justifyContent: 'center'}}>
            <ButtonGroup
                onPress={index => this.setState({kosherIndex: index})}
                selectedIndex={this.state.kosherIndex}
                buttons={this.state.kosherOptions}
                containerStyle={{height: 50}}
            />
            <ButtonGroup
                onPress={index => this.setState({shabbatIndex: index})}
                selectedIndex={this.state.shabbatIndex}
                buttons={this.state.shabbatOptions}
                containerStyle={{height: 50}}
            />
            <ButtonGroup
                onPress={index => this.setState({genderIndex: index})}
                selectedIndex={this.state.genderIndex}
                buttons={this.state.genderOptions}
                containerStyle={{height: 50}}
            />
            <ButtonGroup
                onPress={index => this.setState({roomTypeIndex: index})}
                selectedIndex={this.state.roomTypeIndex}
                buttons={this.state.roomTypeOptions}
                containerStyle={{height: 50}}
            />
            <TextInput
                placeholder={'Tell us a bit more about the apartment...'}
                multiline={true}
                style={{backgroundColor: 'white', margin: '3%', height: '20%'}}
                onChangeText={bio => this.handleChange({bio})}
            >
            </TextInput>
            <Button type='clear' title='create listing' onPress={this.handleSubmit}></Button>
      </View>
    )
  }
}