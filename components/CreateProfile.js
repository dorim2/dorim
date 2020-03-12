import React, { Component } from 'react'
import { View } from 'react-native'
import { Input, Button, CheckBox, ButtonGroup } from 'react-native-elements'
import Fire from '../Fire'

export default class CreateProfile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            kosherIndex: -1,
            shabbatIndex: -1,
            genderIndex: -1,
            kosherOptions: ['fully', 'at home only', 'not into it'], 
            shabbatOptions: ['fully', 'shabbat respectful', 'not into it'],
            genderOptions: ['female', 'male', 'other']
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
            // validate choices have been made
            if (!this.state.name.length) {
                throw new Error('name can not be empty')
            }

            if (this.state.kosherIndex < 0) {
                throw new Error('please choose a kosher option')
            }

            if (this.state.shabbatIndex < 0) {
                throw new Error('please choose a kosher option')
            }

            if (this.state.genderIndex < 0) {
                throw new Error('please choose a gender option')
            }
            // send info to backend
            const kosherStatus = this.state.kosherOptions[this.state.kosherIndex]
            const shabbatStatus = this.state.shabbatOptions[this.state.shabbatIndex]
            const genderStatus = this.state.genderOptions[this.state.genderIndex]
            const status = await Fire.shared.createProfile(this.state.name, kosherStatus, shabbatStatus, genderStatus)

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
            <Input label='name' onChangeText={name => this.handleChange({name})}/>          
            <ButtonGroup
                onPress={index => this.setState({kosherIndex: index})}
                selectedIndex={this.state.kosherIndex}
                buttons={this.state.kosherOptions}
                containerStyle={{height: 100}}
            />
            <ButtonGroup
                onPress={index => this.setState({shabbatIndex: index})}
                selectedIndex={this.state.shabbatIndex}
                buttons={this.state.shabbatOptions}
                containerStyle={{height: 100}}
            />
            <ButtonGroup
                onPress={index => this.setState({genderIndex: index})}
                selectedIndex={this.state.genderIndex}
                buttons={this.state.genderOptions}
                containerStyle={{height: 100}}
            />
            <Button type='clear' title='sign up' onPress={this.handleSubmit}></Button>
      </View>
    )
  }
}