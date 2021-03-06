import React, { Component } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Fire from '../Fire'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // update state with new email and password
    handleChange(event) {
        this.setState(prevState => {
            return {...prevState, ...event}
        })
    }

    // login user
    async handleSubmit() {
        try {
            // sign in user
            const status = await Fire.shared.login(this.state.email, this.state.password)

            // status returns an error is sign up failed
            if (status) alert(status)

            // if no status, sign up was successful --> proceed to main view
            else this.props.navigation.navigate('ApartmentsList')
        } catch(error) {
            alert(error)
        }
    }

  render() {
    return (
      <View style={{display: 'flex', justifyContent: 'center'}}>
            <Input label='email' onChangeText={email => this.handleChange({email})}/>
            <Input label='password' onChangeText={password => this.handleChange({password})}/>
            <Button type='clear' title='login' onPress={this.handleSubmit}></Button>
      </View>
    )
  }
}