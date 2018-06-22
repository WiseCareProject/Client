import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import api from './../../api/api';
import AwesomeAlert from 'react-native-awesome-alerts';
import Switch from 'react-native-switch-pro'

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            modalTitle: '',
            modalMessage: '',
            ventaStatus: false,
            blanketStatus: false,
        }
    }

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    ventaStatus = (data) => {
        console.log(this.state.ventaStatus, data);
        this.setState({ventaStatus: data},
            () => {
                api.toggleVenta(this.state.ventaStatus);
                this.setState({
                    modalTitle: 'Venta Component',
                    modalMessage: (this.state.ventaStatus == true ? 'ON' : 'OFF') + ' Successfully',
                    showAlert: true,
                })
            });
    };

    blanketStatus = (data) => {
        this.setState({blanketStatus: data},
            () => {
                api.toggleBlanket(this.state.blanketStatus);
                this.setState({
                    modalTitle: 'Blanket Component',
                    modalMessage: (this.state.blanketStatus == true ? 'ON' : 'OFF') + ' Successfully',
                    showAlert: true,
                })
            });
    };

    feedNow = () => {
        api.feedNow();
        this.setState({
            modalTitle: 'Food Component',
            modalMessage: 'Feeding Successfully',
            showAlert: true,
        })
    };

    fillWater = () => {
        api.fillWater();
        this.setState({
            modalTitle: 'Water Component',
            modalMessage: 'Fill Water Successfully',
            showAlert: true,
        })
    };

    resetScale = () => {
        api.cleanScale();
        this.setState({
            modalTitle: 'Food Component',
            modalMessage: 'Clean Scale Successfully',
            showAlert: true,
        })
    };

    stopServo = () => {
        api.servoStop();
        this.setState({
            modalTitle: 'Food Component',
            modalMessage: 'Servo Stopped Successfully',
            showAlert: true,
        })
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.form}>
                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>Environment Routes</Text>
                    </View>

                    {/* Enviroment */}
                    <View style={styles.component}>
                        <Text style={styles.text}>Venta</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <Switch value={this.state.ventaStatus}
                                onSyncPress={(ventaStatus) => this.ventaStatus(ventaStatus)}/>
                    </View>

                    <View style={styles.component}>
                        <Text style={styles.text}>Blanket</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <Switch value={this.state.blanketStatus}
                                onSyncPress={(blanketStatus) => this.blanketStatus(blanketStatus)}/>
                    </View>

                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>Food Routes</Text>
                    </View>
                    {/* Food */}
                    <View style={styles.component}>
                        <Text style={styles.text}>Feeding</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.feedNow() }
                            underlayColor='#fff'>
                            <Text style={styles.buttonText}>TEST</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>Water Routes</Text>
                    </View>
                    {/* Water */}
                    <View style={styles.component}>
                        <Text style={styles.text}>Fill Water</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.fillWater() }
                            underlayColor='#fff'>
                            <Text style={styles.buttonText}>TEST</Text>
                        </TouchableOpacity>
                    </View>

                    {/* System Route */}
                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>System Routes</Text>
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.text}>Reset Scale</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.resetScale() }
                            underlayColor='#fff'>
                            <Text style={styles.buttonText}>RESET</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.component}>
                        <Text style={styles.text}>Stop Servo</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}, styles.component]}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.stopServo() }
                            underlayColor='#fff'>
                            <Text style={styles.buttonText}>STOP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    progressColor="#3f5891"
                    title={this.state.modalTitle}
                    message={this.state.modalMessage}
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
        marginTop: 10,
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
    toggleText: {
        // borderWidth: 1,
        // borderColor: '#f00',
        fontSize: 11,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "SourceSansPro-Bold",
    },
    button: {
        backgroundColor: '#1de1f9',
        borderRadius: 5,
        padding: 7,
        paddingRight: 20,
        paddingLeft: 20
    },
    buttonText: {
        color: '#fff',
        fontFamily: "SourceSansPro-Bold",
    }
});

export default Buttons;