import React from 'react'
import { Component } from 'react'
import Button from '../Button/Index'

class Home extends Component {
    render() {
        <View>
            <Buttom text="Create Product" onPress={() => this.props.navigate("createProduct")}/>
        </View>
    }
}

