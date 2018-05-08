import React, {Component} from 'react';
import {StyleSheet, View, Switch, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView, TextInput} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import axios from "axios/index";
import AwesomeAlert from 'react-native-awesome-alerts';

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            isDateTimePickerVisible: false,
            isLoading: true,
            platformId: '1',
            uniquePlatformId: "",
            isAutomated: "",
            feedingTime: [],
            maxTemperature: "",
            lowTemperature: "",
        }
    }

    componentWillMount() {
        let self = this;
        axios({
            method: 'post',
            url: 'http://52.38.156.227:8081/getUserSettings',
            data: {
                uniquePlatformId: this.state.platformId,
            }
        })
            .then(function (response) {
                self.setState({
                    uniquePlatformId: response.data.uniquePlatformId,
                    isAutomated: response.data.isAutomated,
                    defaultAmountOfFood: response.data.defaultAmountOfFood,
                    maxTemperature: response.data.maxTemperature,
                    lowTemperature: response.data.lowTemperature,
                    feedingTime: response.data.feedingTime,
                    isLoading: false,
                });
            }).catch(function (error) {
            console.log(error);
        });
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
       console.log(dateArray);
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
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    showAlert = () => {
        let amountFood = this.state.defaultAmountOfFood;
        let log = {
            uniquePlatformId: this.state.platformId,
            isAutomated: this.state.isAutomated,
            defaultAmountOfFood: parseInt(amountFood.toString().split('kg')[0]),
            maxTemperature: parseInt(this.state.maxTemperature),
            lowTemperature: parseInt(this.state.lowTemperature),
            feedingTime: this.state.feedingTime,
        };
        console.log(log);
        let self = this;
        axios({
            method: 'post',
            url: 'http://52.38.156.227:8081/setUserSettings',
            headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', },
            data: {
                uniquePlatformId: this.state.platformId,
                isAutomated: this.state.isAutomated,
                defaultAmountOfFood: parseInt(amountFood.toString().split('kg')[0]),
                maxTemperature: parseInt(this.state.maxTemperature),
                lowTemperature: parseInt(this.state.lowTemperature),
                feedingTime: this.state.feedingTime,
            }
        })
            .then(function (response) {
                self.setState({
                    showAlert: true
                });
            }).catch(function (error) {
            console.log(error);
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
                <View style={[styles.loader,{display: this.state.isLoading ? 'flex' : 'none'}]}>
                    <ActivityIndicator size="large" />
                </View>
                <View style={{display: this.state.isLoading ? 'none' : 'flex', marginTop: 20}}>
                    {/* Is Software is automatic ? */}
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.text}>Automatic Platform</Text>
                        </View>
                        <View style={styles.space_between_columns}/>
                        <View style={[{alignItems: 'center'}, styles.column]}>
                            <Switch value={this.state.isAutomated} onValueChange={ (isAutomated) => this.setState({isAutomated}) } />
                        </View>
                    </View>

                    {/* Amount Per Feeding */}
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.text}>Amount Per Feeding</Text>
                        </View>
                        <View style={styles.space_between_columns}/>
                        <View style={[{alignItems: 'center'}, styles.column]}>
                            <ModalDropdown
                                onSelect={(key,value) => this.setState({defaultAmountOfFood: value})}
                                style={styles.ModalDropdown}
                                defaultValue={this.state.defaultAmountOfFood + 'kg'}
                                options={[
                                    '50kg', '75kg', '100kg', '125kg', '150kg'
                                ]}/>
                        </View>
                    </View>

                    {/* Schedule Time */}
                    <View style={styles.container}>
                        <View style={{width: '100%'}}>
                            <Text style={styles.title}>Schedule Time</Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.text}>Morning</Text>
                        </View>
                        <View style={styles.space_between_columns}/>
                        <View style={[{alignItems: 'center'}, styles.column]}>
                            <TouchableOpacity onPress={this._showDateTimePicker}>
                                <Text style={{borderBottomWidth: 1, borderBottomColor: '#fff', color: '#fff'}}>{this.state.feedingTime.length > 0 ? this.parseDate(this.state.feedingTime[0]) : 'Choose Date'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.text}>Evening</Text>
                        </View>
                        <View style={styles.space_between_columns}/>
                        <View style={[{alignItems: 'center'}, styles.column]}>
                            <TouchableOpacity onPress={this._showDateTimePicker}>
                                {/*<Text>{this.state.feedingTime}</Text>*/}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.text}>Night</Text>
                        </View>
                        <View style={styles.space_between_columns}/>
                        <View style={[{alignItems: 'center'}, styles.column]}>
                            <TouchableOpacity onPress={this._showDateTimePicker}>
                                {/*<Text>{this.state.feedingTime}</Text>*/}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode="datetime"
                    />

                    {/* Temperature Range */}
                    <View style={styles.container}>
                        <View style={{width: '100%'}}>
                            <Text style={styles.title}>Temperature Range</Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.text}>Max</Text>
                        </View>
                        <View style={styles.space_between_columns}/>
                        <View style={[{alignItems: 'center'}, styles.column]}>
                            <TextInput
                                style={{height: 30, width: 90, borderBottomWidth: 1, borderColor: '#fff', color:'#fff'}}
                                onChangeText={(maxTemperature) => this.setState({maxTemperature})}
                                value={this.state.maxTemperature ? this.state.maxTemperature.toString() : ''}
                                maxLength = {2}
                            />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.text}>Min</Text>
                        </View>
                        <View style={styles.space_between_columns}/>
                        <View style={[{alignItems: 'center'}, styles.column]}>
                            <TextInput
                                style={{height: 30, width: 90, borderBottomWidth: 1, borderColor: '#fff', color:'#fff'}}
                                onChangeText={(lowTemperature) => this.setState({lowTemperature})}
                                value={this.state.lowTemperature ? this.state.lowTemperature.toString() : ''}
                                maxLength = {2}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.bigButton} onPress={() => this.showAlert()}>
                        <Image source={require('../../images/common/save.png')} style={styles.save}/>
                    </TouchableOpacity>
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
                    overlayStyle={{backgroundColor:'transparent'}}
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
        marginTop: 50,
    },
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
    title: {
        marginTop: 10,
        fontSize: 18,
        color: '#fff',
        fontFamily: "SourceSansPro-Bold",
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    bigButton: {
        bottom: '-5%',
    },
    save: {
        alignSelf: 'center',
        height: '37%',
        width: '92%',
    },
    ModalDropdown: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        width: 100,
        padding: 5,
    }
});

export default Settings;