import React, {Component} from 'react';
import Settings from './Drink/Settings';
import {Alert, StyleSheet, View} from 'react-native';

class Drink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            chooseDate: "Choose Date"
        };

        this._handleDatePicked = this._handleDatePicked.bind(this);
        this._showDateTimePicker = this._showDateTimePicker.bind(this);
        this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
    }

    _showDateTimePicker = () => {
        this.setState(() => {
            return {isDateTimePickerVisible: true};
        });
    };

    _hideDateTimePicker = () => {
        this.setState(() => {
            return {isDateTimePickerVisible: false}
        });
    };

    _handleDatePicked = (date) => {
        this.setState({chooseDate: date.toString()});
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={styles.backGround}>
                <Settings
                    isDateTimePickerVisible={this.state.isDateTimePickerVisible}
                    showDatePicker={this._showDateTimePicker}
                    hideDatePicker={this._hideDateTimePicker}
                    handleDatePicked={this._handleDatePicked}
                    chooseDate={this.state.chooseDate}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: '100%',
        marginTop: 30
    }
});

export default Drink;