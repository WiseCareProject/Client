import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import api from './../../../../api/requests';
import AwesomeAlert from 'react-native-awesome-alerts';

class BigButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            platformId: 1,
            showAlert2: false,
            imageUri: 'http://52.38.156.227:8081/showImage'
        }
    };

    hideAlert = () => {
        this.props.toggleAlert()
    };

    takeSnap = () => {
        api.takeSnapShop().then(() => {
            this.setState({
                showAlert2: true
            });
        });
    };

    render() {
        return (
            <ImageBackground source={require('../../../../images/Main/bg-main-button.png')} style={styles.warp}>
                <View style={styles.spaces}>
                    <Image source={require('../../../../images/Main/arrow-right.png')} style={styles.arrow}/>
                    <TouchableOpacity style={styles.bigButton} onPress={() => this.takeSnap()}>
                        <ImageBackground source={require('../../../../images/Main/bigbutton.png')}
                                         style={styles.buttonImage}>
                            <Text style={styles.btnText}>TAKE</Text>
                            <Text style={styles.btnTextSmall}>SNAPSHOT</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Image source={require('../../../../images/Main/arrow-left.png')}
                           style={[styles.arrow, {opacity: 0}]}/>
                </View>
                <AwesomeAlert
                    show={this.state.showAlert2}
                    showProgress={false}
                    progressColor="#3f5891"
                    title="Arr.. Beautiful!"
                    message="Snapshot saved!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={true}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="DONE"
                    confirmButtonColor="#3f5891"
                    onCancelPressed={() => {
                        this.setState({
                            showAlert2: false
                        });
                    }}
                    onConfirmPressed={() => {
                        this.setState({
                            showAlert2: false
                        });
                    }}
                    overlayStyle={{backgroundColor: 'transparent'}}
                />
                <AwesomeAlert
                    show={this.props.showAlert}
                    showProgress={false}
                    progressColor="#3f5891"
                    message={<Image style={{width: 1000, height: 800, resizeMode: 'contain'}}
                                    source={{uri: this.state.imageUri}}/>}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={true}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="DONE"
                    confirmButtonColor="#3f5891"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                    overlayStyle={{backgroundColor: 'transparent'}}
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
        alignSelf: 'center',
        width: '78%',
    },
    buttonImage: {
        alignSelf: 'center',
        width: '77%',
        aspectRatio: 1,
    },
    btnText: {
        fontSize: 46,
        alignSelf: 'center',
        color: '#fff',
        marginTop: 50,
        width: 230,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    btnTextSmall: {
        fontSize: 38,
        alignSelf: 'center',
        color: '#fff',
        width: 230,
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