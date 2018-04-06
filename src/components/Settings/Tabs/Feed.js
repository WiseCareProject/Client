import React, {Component} from 'react';
import Settings from './Feed/Settings';
import {Alert, StyleSheet, View} from 'react-native';

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            chooseDate: "Choose Date"
        };

        this._handleDatePicked = this._handleDatePicked.bind(this);
        this._showDateTimePicker = this._showDateTimePicker.bind(this);
        this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
        this.parseDate = this.parseDate.bind(this);
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
        let dateFormatted = this.parseDate(date);
        this.setState({chooseDate: dateFormatted});
        this._hideDateTimePicker();
    };

    parseDate(date) {
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }

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

export default Feed;