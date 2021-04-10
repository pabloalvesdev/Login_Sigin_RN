import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <Text>Esta é a pgina de Profile</Text>
      </View>
    )
  }
}