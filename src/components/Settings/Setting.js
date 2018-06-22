import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView, TextInput} from 'react-native';
import Switch from 'react-native-switch-pro'
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import api from "./../../api/requests";
import AwesomeAlert from 'react-native-awesome-alerts';
import axios from "axios/index";

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            isDateTimePickerVisible: false,
            isLoading: true,
            platformId: '1',
            uniquePlatformId: "",
            isAutomated: true,
            feedingTime: [],
            maxTemperature: "",
            lowTemperature: "",
        }
    }

    componentWillMount() {
        let self = this;
        api.getSetting(self);
    };

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
        let dateArray = [];
        let newDate = new Date(date.getTime());
        dateArray.push(newDate);
        this.setState({feedingTime: dateArray});
        this._hideDateTimePicker();
    };

    parseDate(date) {
        date = new Date(date);
        year = date.getFullYear();
        day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        // return `${year}-${month}-${day} ${hours}:${minutes}`;
        return `${hours}:${minutes}`;
    }

    saveSetting = () => {
        api.setSetting(this.state).then(() => {
            this.showAlert();
        });
    };

    showAlert = () => {
        this.setState({
            showAlert: true,
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    render() {
        return (
            <ScrollView>
                <View style={[styles.loader, {display: this.state.isLoading ? 'flex' : 'none'}]}>
                    <ActivityIndicator size="large"/>
                </View>
                <View style={[styles.form, {display: this.state.isLoading ? 'none' : 'flex', marginTop:0}]}>
                    {/* Is Software is automatic ? */}
                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>Software Automation</Text>
                    </View>

                    <View style={styles.component}>
                        <Text style={styles.text}>Automatic Platform</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <Switch value={this.state.isAutomated}
                                onSyncPress={(isAutomated) => this.setState({isAutomated})}/>
                    </View>

                    {/* Amount Per Feeding */}
                    <View style={styles.component}>
                        <Text style={styles.text}>Amount Per Feeding</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <ModalDropdown
                            onSelect={(key, value) => this.setState({defaultAmountOfFood: value})}
                            style={styles.ModalDropdown}
                            textStyle={{color: '#fff'}}
                            defaultValue={this.state.defaultAmountOfFood + 'g'}
                            options={[
                                '50g', '75g', '100g', '125g', '150g'
                            ]}/>
                    </View>

                    {/* Schedule Time */}
                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>Schedule Time</Text>
                    </View>

                    <View style={styles.component}>
                        <Text style={styles.text}>Morning</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <Text style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#fff',
                                color: '#fff'
                            }}>{this.state.feedingTime.length > 0 ? this.parseDate(this.state.feedingTime[0]) : 'Choose Date'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.text}>Evening</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        {/*<TouchableOpacity onPress={this._showDateTimePicker}>*/}
                            <Text style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#fff',
                                color: '#fff'
                            }}>15:00</Text>
                        {/*</TouchableOpacity>*/}
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.text}>Night</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        {/*<TouchableOpacity onPress={this._showDateTimePicker}>*/}
                            <Text style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#fff',
                                color: '#fff'
                            }}>20:00</Text>
                        {/*</TouchableOpacity>*/}
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode="time"
                    />

                    {/* Temperature Range */}
                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>Temperature Range</Text>
                    </View>

                    <View style={styles.component}>
                        <Text style={styles.text}>Max</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={{height: 30, width: 90, borderBottomWidth: 1, borderColor: '#fff', color: '#fff', paddingVertical: 0}}
                                   onChangeText={(maxTemperature) => this.setState({maxTemperature})}
                                   value={this.state.maxTemperature ? this.state.maxTemperature.toString() : ''}
                                   maxLength={2}
                        />
                    </View>

                    <View style={styles.component}>
                        <Text style={styles.text}>Min</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={{height: 30, width: 90, borderBottomWidth: 1, borderColor: '#fff', color: '#fff', paddingVertical: 0}}
                                   onChangeText={(lowTemperature) => this.setState({lowTemperature})}
                                   value={this.state.lowTemperature ? this.state.lowTemperature.toString() : ''}
                                   maxLength={2}
                        />
                    </View>

                    <View style={{width: '100%'}}>
                        <TouchableOpacity onPress={() => this.saveSetting()}>
                            <Image source={require('./../../images/common/save.png')} style={styles.save}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    progressColor="#3f5891"
                    title="Success!"
                    message="Settings saved"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={true}
                    showCancelButton={false}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="OK"
                    confirmButtonColor="#3f5891"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                    overlayStyle={{backgroundColor: 'transparent'}}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    form: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'space-between',
        marginRight: 50,
        marginLeft: 50,
    },
    component: {
        width: '50%',
        justifyContent: 'center',
        marginBottom: 15,
    },
    title: {
        marginTop: 25,
        marginBottom: 15,
        fontSize: 18,
        color: '#fff',
        fontFamily: "SourceSansPro-Bold",
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    save: {
        alignItems:'center',
        height: 42.5,
        overflow: 'visible',
        width: '100%',
        marginTop: 25
    },
    ModalDropdown: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        width: 100,
        padding: 5,
    }
});

export default Settings;