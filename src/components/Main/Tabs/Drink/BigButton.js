import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import axios from "axios/index";
class BigButton extends Component {

    constructor(props) {
        super(props);
        this.state = { showAlert: false };
    };

    fillWater() {
        axios({
            method: 'get',
            url: 'http://52.38.156.227:8081/fillUpWater',
            headers: {
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                this.setState({
                    showAlert: true
                });
            }).catch(function (error) {
            console.log(error);
        });
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

    render() {
        const {showAlert} = this.state;
        return (
            <ImageBackground source={require('../../../../images/Main/bg-main-button.png')} style={styles.warp}>
                <View style={styles.spaces}>
                    <Image source={require('../../../../images/Main/arrow-right.png')} style={styles.arrow}/>
                    <TouchableOpacity style={styles.bigButton} onPress={this.fillWater}>
                        <ImageBackground source={require('../../../../images/Main/bigbutton.png')}
                                         style={styles.bigButton}>
                            <Text style={styles.btnText}>FILL WATER</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Image source={require('../../../../images/Main/arrow-left.png')} style={styles.arrow}/>
                </View>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={true}
                    progressColor="#3f5891"
                    title="AwesomeAlert"
                    message="I have a message for you!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={true}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#3f5891"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                    overlayStyle={{backgroundColor:'transparent'}}
                />
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    warp: {
        height: '60%',
        marginTop: 10
    },
    spaces: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90%',
        marginLeft: 10,
        marginRight: 10,
    },
    bigButton: {
        marginTop: 10,
        alignSelf: 'center',
        height: '86%',
        width: '78%',
    },
    btnText: {
        fontSize: 46,
        alignSelf: 'center',
        color: '#fff',
        marginTop: 45,
        width: 150,
        textAlign: 'center',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    arrow: {
        alignSelf: 'center',
        height: 35,
        width: 15,
    }
});

export default BigButton;