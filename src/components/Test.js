import React, { Component } from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class Test extends Component {

    state = {
        photos: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response =>
                this.setState({
                    photos: response.data
                })
            );
    }

    renderData() {
        return this.state.photos.map(
            photo => <Text key={photo.id}>{photo.title}</Text>
        )
    }

    render() {
        return (
            <View>
                {this.renderData()}
            </View>
        );
    }
};

export default Test;