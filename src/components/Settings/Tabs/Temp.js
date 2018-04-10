import React, {Component} from 'react';
import Settings from './Temp/Settings';
import {StyleSheet, View} from 'react-native';

class Temp extends Component {

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
        day  = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        month  = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
        return `${day}-${month}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
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

export default Temp;