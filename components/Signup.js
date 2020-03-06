import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Fire from '../Fire'

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            confirmedPassword: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // update state with new email, password, and confirmed password
    handleChange(event) {
        this.setState(prevState => {
            return {...prevState, ...event}
        })
    }

    // validate user input and sign up for new account
    async handleSubmit() {
        try {
            // validate passwords match
            if (this.state.password != this.state.confirmedPassword) {
                throw new Error('Passwords do not match')
            }

            // sign up user, status will return an error or null if successful
            const status = await Fire.shared.signup(this.state.email, this.state.password)
            if (status) alert(status)
        } catch(error) {
            alert(error)
        }
    }

  render() {
    return (
      <View style={{display: 'flex', justifyContent: 'center'}}>
            <Input label='email' onChangeText={email => this.handleChange({email})}/>
            <Input label='password' onChangeText={password => this.handleChange({password})}/>
            <Input label='confirm password' onChangeText={confirmedPassword => this.handleChange({confirmedPassword})}/>
            <Button type='clear' title='sign up' onPress={this.handleSubmit}></Button>
      </View>
    )
  }
}