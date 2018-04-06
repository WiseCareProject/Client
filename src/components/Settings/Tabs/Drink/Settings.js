import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Switch, Text, TouchableOpacity, Image, Alert} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';

class Settings extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.column}>
                        <Text style={styles.text}>Automatic Feeding?</Text>
                    </View>
                    <View style={styles.space_between_columns}/>
                    <View style={[{alignItems: 'center'}, styles.column]}>
                        <Switch/>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.column}>
                        <Text style={styles.text}>Amount Per Feeding</Text>
                    </View>
                    <View style={styles.space_between_columns}/>
                    <View style={[{alignItems: 'center'}, styles.column]}>
                        <ModalDropdown style={styles.ModalDropdown} options={[
                            '100kg', '150kg', '200kg', '250kg', '300kg'
                        ]}/>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.column}>
                        <Text style={styles.text}>Schedule Time</Text>
                    </View>
                    <View style={styles.space_between_columns}/>
                    <View style={[{alignItems: 'center'}, styles.column]}>
                        <TouchableOpacity onPress={this.props.showDatePicker}>
                            <Text>{this.props.chooseDate}</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.props.isDateTimePickerVisible}
                            onConfirm={this.props.handleDatePicked}
                            onCancel={this.props.hideDatePicker}
                            mode="datetime"
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.bigButton}>
                    <Image source={require('../../../../images/common/save.png')} style={styles.save}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 50,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 150,
    },
    space_between_columns: {
        width: 20
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    bigButton: {
        bottom: '-60%',
    },
    save: {
        alignSelf: 'center',
        height: '45%',
        width: '84%',
    },
    ModalDropdown: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        color: '#fff',
        width: 100,
        padding: 5,
    }
});

Settings.propTypes = {
    isDateTimePickerVisible:PropTypes.bool,
    showDatePicker:PropTypes.func,
    hideDatePicker:PropTypes.func,
    handleDatePicked:PropTypes.func,
    chooseDate:PropTypes.string,
};

export default Settings;