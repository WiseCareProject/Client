import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import api from './../../../../api/requests';
import SvgButton from './buttonSvg';

class BigButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false
        };
    };

    feedButton() {
        let self = this;
        api.feedNow(self);
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
                    <TouchableOpacity style={styles.bigButton} onPress={this.feedButton}>
                        <ImageBackground source={require('../../../../images/Main/bigbutton.png')}
                                         style={styles.buttonImage}>
                            <Text style={styles.btnText}>START FEED</Text>
                        </ImageBackground>
                        {/*<SvgButton />*/}
                    </TouchableOpacity>
                    <Image source={require('../../../../images/Main/arrow-left.png')} style={styles.arrow}/>
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
                        overlayStyle={{backgroundColor: 'transparent'}}
                    />
                </View>

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
        alignSelf: 'center',
        width: '78%',
    },
    buttonImage: {
        alignSelf: 'center',
        width: '77%',
        aspectRatio: 1,
    },
    btnText: {
        fontSize: 44,
        alignSelf: 'center',
        color: '#fff',
        marginTop: 55,
        width: 150,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    arrow: {
        alignSelf: 'center',
        height: 35,
        width: 15,
    }
});

export default BigButton;